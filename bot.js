const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592481867366793235")
setInterval(function() {
channel.send(`B2T_`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
