//require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN
const Discord = require('discord.js')
const Bot = new Discord.Client();
const prefix = '!';
const fs = require('fs');
client.commands = new Discord.Collection();

//ensures all files are JS
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

Bot.once('ready', () => {
    console.log("Let's get quirky!! :D")
});

client.on('message', message => {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

    if(message.content.startsWith(prefix) || message.author.bot){
        if(command === 'quirky'){
            message.channel.send(':3!');
        }
        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        }
    }
});
Bot.login(BOT_TOKEN);
