// Import Discord module and create new Client()(i.e. bot)
const Discord = require('discord.js');
const client = new Discord.Client();

// Import quotes and key
const quotes = require('./quotes');
const key = require('./key');

// When Shoresy comes online, log a message to make sure he doesn't error out
client.on('ready', () => {
    console.log('Shoresy is online...');
})

// Call the random reply when someone calls bot
client.on('message', msg => {
    let args = msg.content.split(' ');
    let randomQuote = quotes.randomQuote();
    for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase() == '!fuckyoushoresy') {
            msg.channel.send(quotes.modifyQuote(msg.author.username, randomQuote));

            // For testing specific quotes
            // msg.channel.send(quotes.modifyQuote(msg.author.username, quotes.quotes[3]));  
        }
    }
})

client.login(key.token);