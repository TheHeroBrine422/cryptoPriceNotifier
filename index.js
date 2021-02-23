const Eris = require("eris");

refreshRate = 1000*60*5;

const bot = new Eris("BOT_TOKEN");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

/*
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!ping") { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === "!pong") { // Otherwise, if the message is "!pong"
        bot.createMessage(msg.channel.id, "Ping!");
        // Respond with "Ping!"
    }
});
*\

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "n!add") { // Add notification for user.

    } else if(msg.content === "n!list") { // list existing notifications 

    } else if(msg.content === "n!del") { // remove notifcation 

    } else if(msg.content === "n!help") { // list commands and syntax

    }
});

function checkNotifcations() {
// get prices of cryptos available (hopefully api exists that gets current price of like top 100 cryptos
// loop through notifications and find which ones are needed to be notified.
}

bot.connect(); 
