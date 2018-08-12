const Discord = require("discord.js");
const client = new Discord.Client();

//If environment variables aren't already available, load them from file
if (process.env.PORT == undefined) {
    require("dotenv").load()
} else { //If environment variables are already available, then Heroku is being used

}

client.login(`${process.env.DiscordKey}`);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.id}`);
});