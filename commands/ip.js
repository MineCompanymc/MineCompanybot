const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("IP's:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("ÂŠī¸ đđ˛đˇđŽđđ¸đļđšđĒđˇđ")
        //text
        .setDescription(`----
        Survival:
        185.227.81.177:25575
        *[1.18.1]*
        ----
        `);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!ip",
    description: "Geeft de Ip's van de servers weer",
    category: "Informatie",
    aliases: []
}