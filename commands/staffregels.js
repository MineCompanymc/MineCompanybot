const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Staff regels:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`**Regels voor staff op de MineCompany Minecraft/discord Server(s):**

        1. Luister altijd naar elkaar!

        2. Gebruik nooit je perms om iemand te beledigen ,kwetsen,... (of je bent eigenaar/mede-eigenaar)

        3. Bespreek altijd al je plannen voor je server met @『👑 』Lead

        4. Bespreek plug-ins altijd met @deleted-role & @『👑 』Lead/ @『🛠 』Developer Team

        5. wees actief!

        6. Help altijd spelers die hulp nodig hebben zo goed mogelijk!

        7. Kijk(minstents)  elke ochtend en elke avond op discord . (er zijn uitzonderingen zoals vakantie , ...)

        8. Laat weten als je een tijdje niet online/actief kunt zijn met een goede reden!

        9. Houd je aan de basisregels als staff ,geen misbruik ect.

        10. Als je ideeën  hebt mag je die altijd aan @『👑 』Lead  stellen!

        11. Vragen mag je altijd stellen prive aan @『👑 』Lead  of aan een persoon die er meer over weet !

        12. Niet meedoen met give aways!

        ==============================================

        **➥Mvg Mine Company Leadteam!**`);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!staffrules",
    description: "De staffregels van de discordserver",
    category: "Modderator",
    aliases: []
}