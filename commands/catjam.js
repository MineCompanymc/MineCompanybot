const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`<a:catJAM:814086343066910730>`);
    message.react("<a:catJAM:814086343066910730>");

}

module.exports.info = {
    name: "catJAM",
    description: "danskat",
    category: "Spelletjes",
    aliases: ["catjam","CATJAM","CATjam"]
}