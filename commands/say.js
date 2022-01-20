const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (message.author.bot) return;
    const SayMessage = message.content.slice(4).trim();
    message.channel.send(SayMessage)

    message.delete();

}

module.exports.info = {
    name: "!say",
    aliases: [],
    description: "laat de bot jou nazeggen",
    category: "Modderator"
}