const { SlashCommandBuilder } = require("discord.js")
const { ethers } = require("ethers")
const ZkGateway = require("../../contracts/build/contracts/contracts/ZkGateway.sol/ZkGateway.json")

module.exports = {
    data: new SlashCommandBuilder().setName("verify").setDescription("verify your NFT holding"),
    async execute(interaction) {
        await interaction.reply({ content: "http://localhost:1234/", ephemeral: true })
    }
}
