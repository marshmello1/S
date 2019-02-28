const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550788200361361421")
setInterval(function() {
channel.send(`Bad Girl`);
}, 800)
})

client.login(process.env.BOT_TOKEN);
