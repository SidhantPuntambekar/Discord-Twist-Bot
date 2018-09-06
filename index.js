const Discord = require("discord.js");
const pg = require("pg");

const client = new Discord.Client();
let databaseClient;

//If environment variables aren't already available, load them from file
if (process.env.PORT == undefined) {
    require("dotenv").load()
} else { //If environment variables are already available, then Heroku is being used
    databaseClient = new pg.Client({ connectionString: process.env.DATABASE_URL });
}

//Logs the client in
client.login(`${process.env.DiscordKey}`);

//How the bot responds to a message being sent
client.on('message', message => {
    //If the command doesn't have the bot mentioned, the bot ignores the message
    if (!message.cleanContent.includes("@Tornado Twister#8282")) {
        return;
    }
    client.message("Hello");
})