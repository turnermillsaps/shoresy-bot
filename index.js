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
    let args = msg.content.split(' '); // Call the .split() method to take each word separated by a space and put into an array
    let randomQuote = quotes.randomQuote(); // Look at the randomQuote() function in quotes.js
    for (let i = 0; i < args.length; i++) { // Use a for loop to iterate over the args array from above
        if (args[i].toLowerCase() == '!fuckyoushoresy') {
            msg.channel.send(quotes.modifyQuote(msg.author.username, randomQuote)); // Look at the modifyQuote function in quotes.js

            // For testing specific quotes
            // msg.channel.send(quotes.modifyQuote(msg.author.username, quotes.quotes[3]));  
        }
    }
})

client.login(key.token);