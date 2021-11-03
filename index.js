const { Client, Intents } = require("discord.js");

const dotenv = require("dotenv");

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Bot Online");
});

client.login(process.env.TOKEN);
