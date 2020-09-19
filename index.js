require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN
const Discord = require('discord.js')
const Bot = Discord.Client();

Bot.once('ready', () => {
    console.log("Let's get quirky!! :D")
});

Bot.login("insert token");
