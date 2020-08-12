// Create an array with statically defined quotes from the show
// *Note* this could be stored in a database which would make adding and deleting quotes much easier than modifying code
let quotes = [
    'Fuck you replyUser tell your mum I drained the bank account she set up for me. Top it up so I can get some fuckin\' KFC.',
    'Fuck you replyUser shoulda heard your mum last night she sounded like my great aunt when I pop in for a surprise visit like, ooooooooooohhhhhhhhhhhhh',
    'Fuck you replyUser shoulda heard your mum last night she sounded like a window closing on a tonkanese cats tail like, aaaaaaaaaaaahhhhhhhhhhh',
    'Fuck you replyUser I made an oopsie. Can you tell randomUser1 mum to pick up randomUser2 mum on the way to my place? I doubled booked them by mistake you fuckin\' loser',
    'Fuck you replyUser tell your mum to top off the cell phone she bought me so I can face-time her late night',
    'Great day for competitive men\'s hockey, eh? What\'s women\'s hockey like? Same thing, just less competitive or what?',
    'Fuck you replyUser your mum keeps tryin\' to slip a finger in my bum but I keep telling her that I only let randomUser1 mum do that ya fuckin loser',
    'Fuck you replyUser your mom loves anal the way I love Haagen daz. Let\'s go get some fuckin\' ice cream',
    'Fuck your entire fuckin\' life you piece of shit',
    'Fuck you replyUser your breath\'s an existential crisis; made me question my whole fuckin\' life',
    'Fuck you replyUser Your mom pulled the goalie on me and now she\'s preggo. Surprise, son. Go rake the fuckin\' yard',
    'Fuck you replyUser I talked your mom into a three-way with our midwife and she gassed us both out of the room. I\'m fuckin\' humiliated',
    'Fuck you replyUser your mom wants to name the baby after the place it was conceived. Can\'t wait to meet Martha\'s Vineyard Shore'
]

// Create an array of names I'd like to loop through
// *Note* Again, this could be stored in a database for much easier access and modification
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
    return quotes[Math.floor(Math.random() * (quotes.length))]; // Grabs a random index from the quotes array
}

// Grab random user
// *Note* Notice that if an argument is provided, it will return a different index than the original name's index
randomUser = (name) => {
    if (!name) { // If no argument is provided
        return users[Math.floor(Math.random() * (users.length))]; // Grab a random index of the users array
    } else { 
        let newIndex = users.indexOf(name) - (Math.floor(Math.random() * (users.length - 1))); // Find the index of the provided name, then subtract the length of the array - 1
        if (newIndex < 0) { // Make sure if the index is negative, to get a positive index so you don't cause an error
            return users[(users.length - 1) + newIndex]; 
        }
        return users[newIndex];
    }
}

// Handle replyUser and randomUser cases with proper values
modifyQuote = (replyUser, quote) => {
    quote = quote.split(' '); // Split up the quote argument into its own array
    let currentUser;
    let previousUser;
    for (let i = 0; i < quote.length; i++) { // Iterate over the quote array
        // Each condition modifies the index to include the proper grammar
        if (quote[i] == 'replyUser') {
            quote[i] = `${replyUser},`; // Need a better way to handle this so that if the randomUser has apostraphe's, commas, etc after, I don't explicitly define them here
        }

        if (quote[i] == 'randomUser1') {
            currentUser = randomUser();
            quote[i] = `${currentUser}\'s`; 
            previousUser = currentUser;
        }

        if (quote[i] == 'randomUser2') {
            quote[i] = `${randomUser(previousUser)}\'s`; 
        }
    }
    return quote.join(' '); // Then return the new quote array by using .join()
}

exports.randomQuote = randomQuote;
exports.modifyQuote = modifyQuote;
exports.quotes = quotes; // For testing specific scenarios