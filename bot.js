﻿ const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("521417495446552599")
setInterval(function() {
channel.send(`SuPerBoY SuPerBoY SuPerBoY SuPerBoY SuPerBoY SuPerBoY`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "2s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});

client.login(process.env.BOT_TOKEN); 