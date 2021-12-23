const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Gezocht**: Sponsers`);

}

module.exports.info = {
    name: "!spon",
    description: "Wij zoeken sponsers",
    category: "Informatie"
}