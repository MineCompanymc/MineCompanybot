const discord = require("discord.js");
const engels = ['933356489760972867'];
const nederlands = ['933354936551473232'];

module.exports.run = async (bot, message, args) => {

    if (engels.some(role => message.member.roles.cache.get(role))){

        message.channel.send(`Here take this: <:stella:891404782353408070>`);
        message.react("<:stella:891404782353408070>");

    }else if (nederlands.some(role => message.member.roles.cache.get(role))){

        message.channel.send(`Hier neem dit: <:stella:891404782353408070>`);
        message.react("<:stella:891404782353408070>");

    }else return message.react("jij moet nog een rol claimen/you still have to claim a role");

}

module.exports.info = {
    name: "bier",
    description: "Het armyhost partner bericht",
    category: "Spelletjes",
    aliases: ["pils","beer"]
}