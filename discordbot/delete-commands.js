const { SlashCommandBuilder, Routes } = require("discord.js")
const { REST } = require("@discordjs/rest")
require("dotenv").config()

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN)

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: [] })
    .then(() => console.log("Successfully deleted application commands."))
    .catch(console.error)
