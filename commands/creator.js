const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
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
        - 50 abonnees/volgers hebben
        ---
        Als je deze rank hebt mag je in  "#🔔〡creator-reclame" reclame maken voor jou video/stream!
        Er wordt niet getagd. 
        ---
        Als er nog vragen zouden zijn mag je een ticket aanmaken.
        Veel succes!
        

        *(Dit bericht kan worden aangepast!)*

        **➥Mvg Mine Company Leadteam!**`);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!creator",
    description: "Informatie over de rol *『🎥』Content Creator*",
    category: "Informatie"
}