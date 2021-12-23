const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("IP's:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`----
        Survival:
        node1.armyhost.nl:25500
        *[1.18]*
        ----
        `);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!ip",
    description: "Geeft de Ip's van de servers weer",
    category: "Informatie"
}