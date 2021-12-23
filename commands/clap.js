const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`<a:Clap:853194735393046598>`);
    message.react("<a:Clap:853194735393046598>");

}

module.exports.info = {
    name: "Clap",
    description: "Aplaus",
    category: "Spelletjes"
}