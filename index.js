// Import Discord module and create new Client()(i.e. bot)
const Discord = require('discord.js');
const client = new Discord.Client();

// Import quotes and key
const quotes = require('./quotes');
const key = require('./key');

// Get a randomQuote
let randomQuote = quotes.randomQuote();

client.on('ready', () => {
    console.log('Shoresy is online...');
})

client.on('message', msg => {
    let args = msg.split(' ');
    for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase() == '!fuckyoushoresy') {
            msg.channel.send(quotes.modifyQuote()); // Need to find out how to replace replyUser with the account that called the bot
        }
    }
})