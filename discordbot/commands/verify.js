const { SlashCommandBuilder } = require("discord.js")
const frontendURL = "http://localhost:1234"

module.exports = {
    data: new SlashCommandBuilder().setName("verify").setDescription("verify your NFT holding"),
    async execute(interaction) {
        const replyURL = frontendURL + "?userId=" + interaction.user.id + "&guildId=" + interaction.guild.id
        await interaction.reply({ content: replyURL, ephemeral: true })
    }
}
