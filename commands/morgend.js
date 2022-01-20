const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`morgend `);

}

module.exports.info = {
    name: "morgend",
    aliases: [],
    description: "morgend",
    category: "Spelletjes"
}