const { SlashCommandBuilder } = require("discord.js")
const { ethers } = require("ethers")
const ZkGateway = require("../../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json")

const contractAddress = "0x19b1b1FeDBA133523Aa826Ec62bda6435B14D9Fb"
const providerURL = "https://api.s0.ps.hmny.io/"
const chainId = 1666900000
const SNARK_LIMIT = ethers.BigNumber.from(
    "21888242871839275222246405745257275088548364400416034343698204186575808495617"
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Setup with ZK-NFT-Gateway with ERC721 token address")
        .addStringOption((option) =>
            option.setName("address").setDescription("ERC721 address to set as gateway").setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("role").setDescription("role ID given to authorized users").setRequired(true)
        ),
    async execute(interaction) {
        const provider = new ethers.providers.JsonRpcProvider(providerURL, chainId)
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

        const contract = new ethers.Contract(contractAddress, ZkGateway.abi, wallet)

        const tokenAddress = interaction.options.getString("address")
        const roleId = interaction.options.getString("role")

        // TODO: add validation of NFT contract address
        const isAddress = ethers.utils.isAddress(tokenAddress)
        if (!isAddress) {
            interaction.reply("Contract address input is not valid")
            return
        }

        await interaction.reply("Setup is ongoing")

        // const id = ethers.utils.formatBytes32String(process.env.GUILD_ID)
        let id
        while (id === undefined) {
            const candidate = ethers.BigNumber.from(ethers.utils.randomBytes(32))
            if (candidate.lt(SNARK_LIMIT)) {
                id = candidate
                break
            }
        }

        try {
            const transaction = await contract.createGateway(id, tokenAddress, interaction.guild.id, roleId)

            const result = await transaction.wait()
            console.log(result)
            await interaction.followUp(`Successfully setup gateway for ${tokenAddress}`)
        } catch (e) {
            console.error(e)
            await interaction.followUp("Setup is failed. Please try again")
        }
    }
}
