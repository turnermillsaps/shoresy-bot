let quotes = [
    'Fuck you replyUser, tell your mum I drained the bank account she set up for me. Top it up so I can get some fuckin\' KFC.',
    'Fuck you replyUser, shoulda heard your mum last night she sounded like my great aunt when I pop in for a surprise visit like, ooooooooooohhhhhhhhhhhhh',
    'Fuck you replyUser, shoulda heard your mum last night she sounded like a window closing on a tonkanese cats tail like, aaaaaaaaaaaahhhhhhhhhhh',
    'Fuck you replyUser, I made an oopsie. Can you tell randomUser1\'s mum to pick up randomUser2\'s mum on the way to my place? I doubled booked them by mistake you fuckin\' loser',
    'Fuck you replyUser, tell your mum to top off the cell phone she bought me so I can face-time her late night',
    'Great day for competitive men\'s hockey, eh? What\'s women\'s hockey like? Same thing, just less competitive or what?',
    'Fuck you replyUser, your mum keeps tryin\' to slip a finger in my bum but I keep telling her that I only let randomUser1\'s mum do that ya fuckin loser',
    'Fuck you replyUser, your mom loves anal the way I love Haagen daz. Let\'s go get some fuckin\' ice cream',
    'Fuck your entire fuckin\' life you piece of shit',
    'Fuck you replyUser, your breath\'s an existential crisis; made me question my whole fuckin\' life'
]

let users = [
    'Brandon',
    'Dean',
    'Greg',
    'John',
    'Patrick',
    'Hondo',
    'Seth',
    'Thor',
    'Allyssa',
    'Chad',
    'Turner',
    'Steve',
    'PJ'
]

// Grab random quote
randomQuote = () => {
    return quotes[Math.floor(Math.random() * (quotes.length))];
}

// Grab random user
randomUser = () => {
    return users[Math.floor(Math.random() * (users.length))];
}

// Handle replyUser and randomUser cases with proper values
modifyQuote = (replyUser, quote) => {
    quote.replace('replyUser', replyUser);
    
    if(quote.includes('randomUser1')) {
        quote.replace('randomUser1', randomUser());
    }

    if(quote.includes('randomUser2')) {
        quote.replace('randomUser2', randomUser());
    }

    return quote;
}

exports.randomQuote = randomQuote;
exports.modifyQuote = modifyQuote;