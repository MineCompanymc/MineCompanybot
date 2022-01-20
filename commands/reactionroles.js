const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var embedEng = new discord.MessageEmbed()
        .setTitle("Roles")
        .setDescription(`Which channels would you like to see?
            In this post you can turn on/off different channels.
        
            How does it work?
            We have an emoji for each game. If you click on the emoji below this post, you will access that particular channel. If you click on the emoji again, your access to the channel goes away again. This way you can decide which channels you would like to see any time of the day.
        
            See our channels below:
            
            🔔: Notification
            <:minecraft:778345193077473341>: @『🎮』Speler 
            🎧: DJ-Role
            :regional_indicator_s:: English
            :regional_indicator_e:: @『 🇧🇪 』 Nederlands
            🧸: Promotion

            `)
        .setColor("#1821CA")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        .setAuthor("MineCompany","https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png");

    if (engels.some(role => message.member.roles.cache.get(role))){

        message.channel.send(embedEng);
        embedEng.react('🔔', '<:minecraft:778345193077473341>', '🎧', ':regional_indicator_s:', ':regional_indicator_e:', '🧸')

    }else if (nederlands.some(role => message.member.roles.cache.get(role))){
    
        message.channel.send(`Hier neem dit: <:stella:891404782353408070>`);
        message.react("<:stella:891404782353408070>");
    
    }else return message.channel.send("jij moet nog een rol claimen/you still have to claim a role");


}

module.exports.info = {
    name: "!rolls",
    description: "Rollen bericht",
    category: "Modderator",
    aliases: []
}
