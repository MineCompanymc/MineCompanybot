const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`hier neem dit: <:stella:891404782353408070>`);
    message.react("<:stella:891404782353408070>");

}

module.exports.info = {
    name: "bier",
    description: "Het armyhost partner bericht",
    category: "Spelletjes"
}