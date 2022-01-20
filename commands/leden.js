const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const ledencount = message.guild.memberCount;
    const bots = 7;
    const leden = ledencount - bots;
    const ledenKanaal = message.guild.channels.cache.get('884524391831068692');
    const botKanaal = message.guild.channels.cache.get('885557070324174988');
    const totaalKanaal = message.guild.channels.cache.get('885556988593963028')

    

    totaalKanaal.setName(`『👪』 ${ledencount}`);
    ledenKanaal.setName(`『🧑』 ${leden}`);
    botKanaal.setName(`『🤖』 ${bots}`);

    var ledenEmbed = new discord.MessageEmbed()
        .setTitle("Leden reload:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .addField("Leden + bots", ledencount)
        .addField("bots", bots)
        .addField("leden", leden)
 
        return message.channel.send(ledenEmbed);


}

module.exports.info = {
    name: "!leden",
    aliases: [],
    description: "Reload de ledencount",
    category: "Modderator"
}