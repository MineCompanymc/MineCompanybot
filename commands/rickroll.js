const discord = require("discord.js");

const rickroll = `https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713`;

module.exports.run = async (bot, message, args) => {

    message.channel.send(rickroll);
    message.channel.send("Ha je bent gerickrollt 😂!");
    message.delete();


}

module.exports.info = {
    name: "!rickroll",
    description: "rickroll iemand",
    category: "Spelletjes"
}
