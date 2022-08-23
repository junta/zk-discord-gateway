const { SlashCommandBuilder } = require("discord.js")
const { ethers } = require("ethers")
const ZkGateway = require("../../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json")

module.exports = {
    data: new SlashCommandBuilder().setName("verify").setDescription("verify your NFT holding"),
    async execute(interaction) {
        // TODO temporary

        const frontendURL = "http://localhost:1234"
        const replyURL = frontendURL + "?userId=" + interaction.user.id + "&guildId=" + interaction.guild.id
        await interaction.reply({ content: replyURL, ephemeral: true })
    }
}
