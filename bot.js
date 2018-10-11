const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("500018012233924619")
setInterval(function() {
channel.send(`انا جدع ياشوية خولالالالالالات خد في طيرك في طيرك في طيرك :joy: :joy:`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
