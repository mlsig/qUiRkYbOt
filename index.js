//grabs important token for discord bot
require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN

//helps interact with discord api
const Discord = require('discord.js')
const Bot = new Discord.Client();
Bot.commands = new Discord.Collection();

//file system module
const fs = require('fs');

//helps interact with reddit api
const { RedditSimple } = require("reddit-simple");

const prefix = '!';

//ensures all files are JS
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Bot.commands.set(command.name, command);
}

//starting message
Bot.once('ready', () => {
    console.log("Let's get quirky!! :D")
});

//calls command based on input
Bot.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.content.startsWith(prefix) || message.author.bot){
        if(command === 'quirky'){
            Bot.commands.get('quirky').execute(message, args);
        }
        if(command === 'ping'){
            Bot.commands.get('ping').execute(message, args);
        }
        if(command === 'meme'){
            Bot.commands.get('meme').execute(message, args);
        }
        if(command === 'reddit'){
            Bot.commands.get('reddit').execute(message, args);
        }
    }
});
Bot.login(BOT_TOKEN);