const discord = require("discord.js");
const engels = ['933356489760972867'];
const nederlands = ['933354936551473232'];

module.exports.run = async (bot, message, args) => {

    if (engels.some(role => message.member.roles.cache.get(role))){

        message.channel.send(`good morning ${message.author}`);

    }else if (nederlands.some(role => message.member.roles.cache.get(role))){

        message.channel.send(`goede morgen ${message.author}`);

    }else return message.channel.send("jij moet nog een rol claimen/you still have to claim a role");


}

module.exports.info = {
    name: "gm",
    description: "goede morgen!",
    category: "Spelletjes",
    aliases: ["GM", "Gm", "gM"]
}
