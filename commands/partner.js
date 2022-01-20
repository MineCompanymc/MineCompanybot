const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Partner:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`---
        Voor de rank  @『🧍』Partner  te kunnen krijgen moetje via een ticket de goedkeuring krijgen voor deze rank!
        Ook moet je voldoen aan de eisen ervoor of iets voor ons kunnen betekenen.
        ---
        Eisen:
        - Goed draaiende discord hebben!
        - Minstents 150 leden hebben.
        - Een partner rank in jouw discord zodat wij ook reclame voor ons kunnen maken.
        - Een speciale dienst kunnen verlenen aan onze leden.
        - ...
        ---
        Als je deze rank hebt mag je in #🎮〡partners  reclame maken voor jou discord!
        Wel mag de tekst die hier instaat niemand discrimineren, uitschelden,...
        Ook maak je hier een formeel en net bericht van.
        Er wordt niet getagd. 
        ---
        Als er nog vragen zouden zijn mag je  een ticket aanmaken.
        Veel succes!

        *(Dit bericht kan worden aangepast!)*

        **➥Mvg Mine Company Leadteam!**`);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!partner",
    description: "Informatie over de rol *『🧍』Partner*",
    category: "Informatie",
    aliases: []
}