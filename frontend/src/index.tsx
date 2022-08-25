import { ChakraProvider, Button, Container, Stack, Text, Heading } from "@chakra-ui/react"
import "@fontsource/inter/400.css"
import detectEthereumProvider from "@metamask/detect-provider"
import { Identity } from "@semaphore-protocol/identity"
import { generateProof, packToSolidityProof } from "@semaphore-protocol/proof"
import { Group } from "@semaphore-protocol/group"
import { Contract, providers, Signer, BigNumber, utils } from "ethers"
import { hexlify } from "ethers/lib/utils"
import { useEffect, useState, useMemo } from "react"
import { createRoot } from "react-dom/client"
import Gateway from "../../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json"
import MockERC721 from "../../contracts/build/contracts/contracts/MockERC721.sol/MockERC721.json"
import theme from "../styles"
import { BrowserRouter as Router, useLocation } from "react-router-dom"
import { SnackbarProvider, useSnackbar } from "notistack"
import "dotenv/config"

function App() {
    const [_identity, setIdentity] = useState<Identity>()
    const [_commitment, setCommitment] = useState<bigint>()
    const [_contract, setContract] = useState<Contract>()
    const [_account, setAccount] = useState<string>("")
    const [_userId, setUserId] = useState<string>("")
    const [_guildId, setGuildId] = useState<string>("")
    const [_identityCreated, setIdentityCreated] = useState<boolean>(false)

    const contractAddress = "0x19b1b1FeDBA133523Aa826Ec62bda6435B14D9Fb"
    const RELAY_URL = "http://localhost:3000"

    function useQuery() {
        const { search } = useLocation()

        return useMemo(() => new URLSearchParams(search), [search])
    }

    let query = useQuery()

    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        ;(async () => {
            const userId = query.get("userId")
            setUserId(userId!)
            const guildId = query.get("guildId")
            setGuildId(guildId!)
        })()
    }, [])

    const connectWallet = async () => {
        const ethereum = (await detectEthereumProvider()) as any
        const accounts = await ethereum.request({ method: "eth_requestAccounts" })

        await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: hexlify(Number(1666900000)).replace("0x0", "0x")
                }
            ]
        })

        if (!accounts[0]) return

        const ethersProvider = new providers.Web3Provider(ethereum)
        const contract = new Contract(contractAddress, Gateway.abi, ethersProvider.getSigner())
        setContract(contract)

        const gateway = await contract.gateways(_guildId)

        const NFTContract = new Contract(gateway.contractAddress, MockERC721.abi, ethersProvider.getSigner())
        const balance = await NFTContract.balanceOf(accounts[0])
        if (Number(balance) === 0) {
            enqueueSnackbar("Not holding required NFT token", {
                variant: "error"
            })
            return
        }

        const message = {
            app: "ZKGateway",
            operation: "Generate Identity",
            nonce: utils.hexlify(utils.randomBytes(32))
        }
        const messageToSign = JSON.stringify(message, null, 2)

        const signed = await ethereum.request({ method: "personal_sign", params: [messageToSign, accounts[0]] })

        enqueueSnackbar("Signed successfully, Identity creation process is started")

        const identity = new Identity(signed)
        const commitment = identity.generateCommitment()

        const response = await fetch(`${RELAY_URL}/add-member`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                groupId: gateway.groupId.toString(),
                identityCommitment: BigNumber.from(commitment).toString()
            })
        })

        // console.log(response)

        setIdentity(identity)
        setCommitment(commitment)
        setAccount(accounts[0])
        setIdentityCreated(true)
        enqueueSnackbar("your identity is created")
    }

    const claimRole = async () => {
        if (!_contract || !_commitment || !_identity) return
        enqueueSnackbar("Claim Process is started")

        const gateway = await _contract.gateways(_guildId)

        const group = new Group()
        group.addMember(_commitment)

        const signal = "1"
        const externalNullifier = gateway.groupId.toString()

        const { proof, publicSignals } = await generateProof(_identity, group, externalNullifier, signal)
        const solidityProof = packToSolidityProof(proof)

        const response = await fetch(`${RELAY_URL}/verify-membership`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                signal,
                nullifierHash: publicSignals.nullifierHash,
                groupId: gateway.groupId.toString(),
                solidityProof,
                guildId: _guildId,
                userId: _userId,
                roleId: gateway.roleId.toString()
            })
        })

        // console.log(response)

        enqueueSnackbar("Success! Get back to Discord channel and check your role")
    }

    return (
        <>
            <Container maxW="lg" flex="1" display="flex" alignItems="center">
                <Stack>
                    <Heading as="h2" size="xl">
                        ZK NFT gateway for Discord
                    </Heading>
                    <Text pt="2" fontSize="md">
                        Verify your NFT holding and Claim discord role without revealing your wallet address to server
                        owner.
                    </Text>
                    {_account && (
                        <Text pt="2" fontSize="md">
                            Wallet address: {_account}
                        </Text>
                    )}
                    {!_identityCreated && (
                        <Button w="100%" fontWeight="bold" colorScheme="primary" px="4" onClick={connectWallet}>
                            Connect Wallet
                        </Button>
                    )}

                    {_identityCreated && (
                        <Button w="100%" fontWeight="bold" colorScheme="primary" px="4" onClick={claimRole}>
                            Claim role
                        </Button>
                    )}
                </Stack>
            </Container>
        </>
    )
}

const root = createRoot(document.getElementById("app")!)

root.render(
    <SnackbarProvider maxSnack={3} variant={"success"}>
        <ChakraProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ChakraProvider>
    </SnackbarProvider>
)
