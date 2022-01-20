const discord = require("discord.js");
const levelFile = require("../data/levels.json");

module.exports.run = async (bot, message, args) => {

    var idUser = message.author.id;

    if(!levelFile[idUser]){

        levelFile[idUser] = {

            xp: 0,
            level: 0

        }
    }

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;
    var nextLevelXp = levelUser * 300;

    var whenNextLevel = nextLevelXp - xpUser;

    var levelEmbed = new discord.MessageEmbed()
        .setTitle(message.author.username)
        .setColor("#00FF00")
        .addField("Level", levelUser, true)
        .addField("xp", xpUser, true)
        .setFooter(`${whenNextLevel} Xp tot level ${levelUser + 1}`, message.author.displayAvatarURL);

    message.channel.send(levelEmbed);

}

module.exports.info = {
    name: "!level",
    description: "Laat zien wat je level is.",
    category: "Spelletjes",
    aliases: []
}