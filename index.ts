import * as Discord from 'discord.js';
import * as Dotenv from 'dotenv';

Dotenv.load();

let client = new Discord.Client();
client.login(process.env.DiscordKey);

client.on("ready", function() {
    client.channels.array().pop().send("test");
});

