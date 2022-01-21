const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const engels = ['933356489760972867'];
    const nederlands = ['933354936551473232'];

    var botEmbedNl = new discord.MessageEmbed()
        .setTitle("Creator:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`---
        Voor de rank  @『🎥』Content Creator  te kunnen krijgen moet je via een ticket de goedkeuring krijgen voor deze rank!
        Ook moet je voldoen aan de eisen ervoor of iets voor ons kunnen betekenen.
        ---
        Eisen:
        - Youtube en/of twitch kannaal hebben
        - 100 abonnees/volgers hebben
        ---
        Als je deze rank hebt mag je in  "#『🔔』creator" reclame maken voor jou video/stream!
        Er wordt niet getagd. 
        ---
        Als er nog vragen zouden zijn mag je een ticket aanmaken.
        Veel succes!
        

        *(Dit bericht kan worden aangepast!)*

        **➥Mvg Mine Company Leadteam!**`);

    var botEmbedEn = new discord.MessageEmbed()
        .setTitle("Creator:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`---
        To get the rank @『🎥』Content Creator you need to get approved for this rank via a ticket!
        Also, you must meet the requirements for it or be able to do something for us.
        ---
        Requirements:
        - Have Youtube and/or twitch channel
        - Have 100 subscribers/followers
        ---
        If you have this rank you may advertise your video/stream in "#『🔔』creator"!
        There will be no tagging. 
        ---
        If there were any questions you may create a ticket.
        Good luck!
        

        *(This message is subject to change!)*

        **➥Mvg Mine Company Leadteam!**`);
 

    if (engels.some(role => message.member.roles.cache.get(role))){

        message.channel.send(botEmbedEn);

    }else if (nederlands.some(role => message.member.roles.cache.get(role))){

        message.channel.send(botEmbedNl);
    
    }else return message.channel.send("jij moet nog een rol claimen/you still have to claim a role");

}

module.exports.info = {
    name: "!creator",
    description: "Informatie over de rol *『🎥』Content Creator*",
    category: "Informatie",
    aliases: ["!content"]
}