const Eris = require("eris");
const fs = require("fs");

refreshRate = 1000*60*5;
notifications = []
/* structure:
[DiscordUserID, 
[
[Crypto, above/below, ]
]
]
*/
newFile = true

try { // check if previous notifications exist
  if (fs.existsSync("notifications.json")) {
    newFile = false
  }
} catch(err) {
  newFile = true
}

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
*/

bot.on("messageCreate", (msg) => { // When a message is created
    cmd = msg.content.split(" ")
    if (cmd == "n!add") { // Add notification for user. // syntax: n!add <crypto> <above/below> <price> <alert rate (minutes)> 
        if (cmd.length == 5) {
            index = -1;
            for (var i = 0; i > notifications.length; i++) {
                notifications = []
        } else {
            bot.createMessage(msg.channel.id, "Invalid Syntax. Syntax: n!add <crypto> <above/below> <price> <alert rate (minutes)> ")
        }
    } else if (cmd == "n!list") { // list existing notifications 

    } else if (cmd == "n!del") { // remove notifcation // syntax: n!del <id>
        if (cmd.length == 2) {
            
        } else {
            bot.createMessage(msg.channel.id, "Invalid Syntax. Syntax: n!del <id> ")
        }
    } else if (cmd == "n!help") { // list commands and syntax
        bot.createMessage(msg.channel.id, "help text")
    }
});

function checkNotifcations() {
// get prices of cryptos available (hopefully api exists that gets current price of like top 100 cryptos
// loop through notifications and find which ones are needed to be notified.
}

bot.connect(); 
