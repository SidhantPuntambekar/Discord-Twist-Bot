"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = require("discord.js");
var Dotenv = require("dotenv");
Dotenv.load();
var client = new Discord.Client();
client.login(process.env.DiscordKey);
client.on("ready", function () {
    client.channels.array().pop().send("test");
});
