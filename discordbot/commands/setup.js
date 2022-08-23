const { SlashCommandBuilder } = require("discord.js")
const { ethers } = require("ethers")
const ZkGateway = require("../../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Setup with ZK-NFT-Gateway with ERC721 token address")
        .addStringOption((option) =>
            option.setName("address").setDescription("ERC721 address to set as gateway").setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("role").setDescription("role name given to authorized users").setRequired(true)
        ),
    async execute(interaction) {
        const SNARK_LIMIT = ethers.BigNumber.from(
            "21888242871839275222246405745257275088548364400416034343698204186575808495617"
        )

        const provider = new ethers.providers.JsonRpcProvider("https://api.s0.ps.hmny.io/", 1666900000)
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
        // TODO: should be extracted as constants
        const contractAddress = "0x77e6Bd5c1988d8d766698F9CeEa5C24559b999f8"
        const contract = new ethers.Contract(contractAddress, ZkGateway.abi, wallet)

        const tokenAddress = interaction.options.getString("address")
        const roleName = interaction.options.getString("role")

        // TODO: check valid contract address

        await interaction.reply("Setup is ongoing")

        // TODO: optimize not to use ramdom number
        let id
        while (id === undefined) {
            const candidate = ethers.BigNumber.from(ethers.utils.randomBytes(32))
            if (candidate.lt(SNARK_LIMIT)) {
                id = candidate
                break
            }
        }

        try {
            const transaction = await contract.createGateway(id, tokenAddress)

            const result = await transaction.wait()
            console.log(result)
            await interaction.followUp(`Successfully setup gateway for ${tokenAddress}`)
        } catch (e) {
            console.error(e)
            await interaction.followUp("Setup is failed. Please try again")
        }
    }
}
