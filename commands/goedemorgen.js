const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`goede morgen ${message.author}`);


}

module.exports.info = {
    name: "Gm",
    description: "goede morgen!",
    category: "Spelletjes"
}
