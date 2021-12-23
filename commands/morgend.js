const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`morgend `);

}

module.exports.info = {
    name: "morgend",
    description: "morgend",
    category: "Spelletjes"
}