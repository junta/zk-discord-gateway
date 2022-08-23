import { ChakraProvider, Button, Container, HStack, Spinner, Stack, Text, Heading } from "@chakra-ui/react"
import "@fontsource/inter/400.css"
import detectEthereumProvider from "@metamask/detect-provider"
import { Identity } from "@semaphore-protocol/identity"
import { Contract, providers, Signer } from "ethers"
import { hexlify } from "ethers/lib/utils"
import { useEffect, useState, useMemo } from "react"
import { createRoot } from "react-dom/client"
import Gateway from "../../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json"
import theme from "../styles"
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom"
import "dotenv/config"

function App() {
    const [_identity, setIdentity] = useState<Identity>()
    const [_signer, setSigner] = useState<Signer>()
    const [_contract, setContract] = useState<Contract>()
    const [_account, setAccount] = useState<string>("")
    const [_userId, setUserId] = useState<string>("")
    const [_guildId, setGuildId] = useState<string>("")

    // TODO: extract to constants
    const contractAddress = "0xBA6BfBa894B5cAF04c3462A5C8556fFBa4de6782"
    const discordApiURL = "https://discord.com/api/v10/"

    function useQuery() {
        const { search } = useLocation()

        return useMemo(() => new URLSearchParams(search), [search])
    }

    let query = useQuery()

    useEffect(() => {
        ;(async () => {
            const userId = query.get("userId")
            setUserId(userId!)
            const guildId = query.get("guildId")
            setGuildId(guildId!)

            const ethereum = (await detectEthereumProvider()) as any

            const ethersProvider = new providers.Web3Provider(ethereum)

            ethereum.on("accountsChanged", (newAccounts: string[]) => {
                if (newAccounts.length !== 0) {
                    setSigner(ethersProvider.getSigner())

                    setContract(new Contract(contractAddress, Gateway.abi, ethersProvider.getSigner()))
                } else {
                    setSigner(undefined)
                }
            })
        })()
    }, [])

    const connectWallet = async () => {
        const ethereum = (await detectEthereumProvider()) as any
        const accounts = await ethereum.request({ method: "eth_requestAccounts" })

        // await ethereum.request({
        //     method: "wallet_switchEthereumChain",
        //     params: [
        //         {
        //             chainId: hexlify(Number(1666900000)).replace("0x0", "0x")
        //         }
        //     ]
        // })

        const ethersProvider = new providers.Web3Provider(ethereum)

        console.log(ethersProvider)

        if (accounts[0]) {
            setAccount(accounts[0])
            setSigner(ethersProvider.getSigner())

            setContract(new Contract(contractAddress, Gateway.abi, ethersProvider.getSigner()))
            const guildId = query.get("guildId")

            const res = await fetch(`${discordApiURL}guilds/${guildId}`, {
                method: "GET",
                headers: { Authorization: `Bot ${process.env.discordApiURL}` }
            })

            console.log(res)
        }
    }

    return (
        <>
            <Container maxW="lg" flex="1" display="flex" alignItems="center">
                <Stack>
                    <Heading as="h2" size="xl">
                        Verify
                    </Heading>
                    <Text pt="2" fontSize="md">
                        Verify your NFT holding to access closed channel.
                    </Text>
                    <Text pt="2" fontSize="md">
                        Wallet address: {_account}
                    </Text>
                    <Button
                        w="100%"
                        fontWeight="bold"
                        justifyContent="left"
                        colorScheme="primary"
                        px="4"
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </Button>
                </Stack>
            </Container>
        </>
    )
}

const root = createRoot(document.getElementById("app")!)

root.render(
    <ChakraProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ChakraProvider>
)
