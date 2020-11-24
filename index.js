const Discord = require("discord.js");
const config = require("./config.json");
const fast = require('./fastdebrid_api');
console.log(fast);

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

const prefix = "!";

client.on("message", function (message) {
    //not answering when not needed
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    //get the message good and case insensitive
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    //if that's one of my args
    if (command == "help"){
        message.reply("here's how to debrid a file:\n➡️ !debrid \"1fichier.com link\"");
    }
    else if (command == "debrid"){
        if (args != ""){
            message.reply("Here's your link ➡️ " + fast.get_fastdebrid_link(args));
        }
        else {
            message.reply("You have to enter a link!");
        }
    }
    else{
        message.reply("here's how to debrid a file:\n➡️ !debrid \"1fichier.com link\"");
    }
});