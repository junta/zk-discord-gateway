import cors from "cors"
import "dotenv/config"
import { Contract, providers, utils, Wallet } from "ethers"
import express from "express"
import { resolve } from "path"
import { abi as contractAbi } from "../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json"

if (typeof process.env.CONTRACT_ADDRESS !== "string") {
    throw new Error("Please, define CONTRACT_ADDRESS in your .env file")
}

if (typeof process.env.ETHEREUM_URL !== "string") {
    throw new Error("Please, define ETHEREUM_URL in your .env file")
}

if (typeof process.env.ETHEREUM_PRIVATE_KEY !== "string") {
    throw new Error("Please, define ETHEREUM_PRIVATE_KEY in your .env file")
}

const ethereumPrivateKey = process.env.ETHEREUM_PRIVATE_KEY
const ethereumURL = process.env.ETHEREUM_URL
const contractAddress = process.env.CONTRACT_ADDRESS
const port = 3000

const app = express()

app.use(cors())
app.use(express.json())

const provider = new providers.JsonRpcProvider(ethereumURL)
const signer = new Wallet(ethereumPrivateKey, provider)
const contract = new Contract(contractAddress, contractAbi, signer)

app.post("/post-review", async (req, res) => {
    const { review, nullifierHash, groupId, solidityProof } = req.body

    try {
        const transaction = await contract.postReview(
            utils.formatBytes32String(review),
            nullifierHash,
            groupId,
            solidityProof
        )

        await transaction.wait()

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
