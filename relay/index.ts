import cors from "cors"
import "dotenv/config"
import { Contract, providers, utils, Wallet } from "ethers"
import express from "express"
import { abi as contractAbi } from "../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json"
const axios = require("axios").default

if (typeof process.env.ETHEREUM_PRIVATE_KEY !== "string") {
    throw new Error("Please, define ETHEREUM_PRIVATE_KEY in your .env file")
}

if (typeof process.env.DISCORD_TOKEN !== "string") {
    throw new Error("Please, define DISCORD_TOKEN in your .env file")
}

const ethereumPrivateKey = process.env.ETHEREUM_PRIVATE_KEY
const ethereumURL = "https://api.s0.ps.hmny.io"
const contractAddress = "0x19b1b1FeDBA133523Aa826Ec62bda6435B14D9Fb"
const port = 3000
const discordApiURL = "https://discord.com/api/v10"

const app = express()

app.use(cors())
app.use(express.json())

const provider = new providers.JsonRpcProvider(ethereumURL)
const signer = new Wallet(ethereumPrivateKey, provider)
const contract = new Contract(contractAddress, contractAbi, signer)

app.post("/verify-membership", async (req, res) => {
    const { signal, nullifierHash, groupId, solidityProof, guildId, userId, roleId } = req.body

    try {
        const transaction = await contract.verifyMembership(
            utils.formatBytes32String(signal),
            nullifierHash,
            groupId,
            solidityProof
        )

        await transaction.wait()

        const roleApiURL = discordApiURL + "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId
        const authValue = "Bot " + process.env.DISCORD_TOKEN
        const response = await axios.put(
            roleApiURL,
            {},
            {
                headers: { Authorization: authValue }
            }
        )

        // console.log(response)

        res.status(200).end()
    } catch (error: any) {
        console.error(error)

        res.status(500).end()
    }
})

app.post("/add-member", async (req, res) => {
    const { groupId, identityCommitment } = req.body

    try {
        const transaction = await contract.addMember(groupId, identityCommitment)

        await transaction.wait()

        res.status(200).end()
    } catch (error: any) {
        console.error(error)

        res.status(500).end()
    }
})

app.listen(port, () => {
    console.info("Started HTTP relay API")
})
