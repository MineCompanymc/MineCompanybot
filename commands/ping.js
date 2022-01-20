const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("ping: " + (message.createdTimestamp - Date.now()) + "ms");

}

module.exports.info = {
    name: "!ping",
    aliases: [],
    description: "hoe snel is de bot?",
    category: "Modderator"
}