const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Regels:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`**Regels op de MineCompany Minecraft/discord Server(s):**

        1 Geen tekens voor je naam zetten om zo bovenaan de lijst te komen.
        
        2 Geen vreemde of dubieuze websites posten, overleg met staff voor toestemming.
        
        3 Heb respect voor elkaar, niet schelden met ziektes of elkaar irriteren.
        
        4 Pesten word niet getolereerd.
        
        5 Het onderspammen / irriteren staff zonder geldige rede is niet toegestaan.
        
        6 Plaats geen persoonlijke gegevens van iemand zonder toestemming.
        
        7 NSFW content is verboden.
        
        8 Geen reclame maken voor jezelf of andere Discord / Minecraft Servers.
        
        9 Geen uitdagend gedrag vertonen in de chats, Signs of elders in op deze server(s)
        
        10 Alleen Nederlands aub.
        
        11 Hou je aan het door staff opgelegde regels indien deze van toepassing zijn tijdens Bv. Events,...
        
        12 X-Ray of andere soort hackcliënt zijn te strengste verboden! Deze verpesten de game voor nieuwkomende spelers of oudere wel legit spelende mensen
        
        13 Altijd luisteren naar de hoogste rang staff! Dit kan erg zware gevolgen hebben indien niet nagevolgt!

        14 Niet spammen!
        
        =============================================
        
        Volg je deze niet op kan je dat een Ban / Mute opleveren.
        Veel plezier op de server.
        
        **➥Mvg Mine Company Staffteam!**`);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!rules",
    description: "De regels van de discordserver",
    category: "Modderator",
    aliases: []
}