const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`goede morgen ${message.author}`);


}

module.exports.info = {
    name: "gm",
    aliases: ["GM","Gm","gM",],
    description: "goede morgen!",
    category: "Spelletjes"
}
