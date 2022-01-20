const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`goede morgen ${message.author}`);


}

module.exports.info = {
    name: "gm",
    description: "goede morgen!",
    category: "Spelletjes",
    aliases: ["GM","Gm","gM"]
}
