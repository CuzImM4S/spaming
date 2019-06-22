const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591252416012353546")
setInterval(function() {
channel.send(`1MsHaRy,I_BlUeFiReW05`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
