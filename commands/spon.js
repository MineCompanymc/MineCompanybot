const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`Sponsers
    Server: *gezocht*
    Discordbot: *gezocht*
    Extern: *gezocht*`);

}

module.exports.info = {
    name: "!spon",
    aliases: [],
    description: "Wij zoeken sponsers",
    category: "Informatie"
}