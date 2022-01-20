const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Staffteam:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`@『👑 』Lead :
        @Mine4thomas | Thomas 
        @Kobe | Simba_Basil 
        Regelen het beheer van de minecraft server(s) en ook van de Mine Company Discord.
        
        @『🛠 』Admin Team:
        @MrJason_
        Regelen het werken en instellen van de plug-ins op de servers en de mogelijke aanpassingen aan de discord/ discord bot.

        @『👨‍💻』Projectleider
        @Mine4thomas | Thomas 
        @Kobe | Simba_Basil 
        @Gert | Gert_Zeno
        Regelen de nieuwe ideën voor servers en houden deze nieuw.
        
        @『🛠 』Developer Team:
        @Kobe | Simba_Basil
        *Gezocht*
        Regelen de buggs en maken de opgelegde taken van @『👑 』Lead zorgvuldig.
        
        @『🛠 』Moderator Team:
        @Mod | Golden_wolf
        @Kileysen
        *Gezocht*
        Regelen de controle over spelers met hacks, buggs, ... en melden bij het zien van 1 meteen iemand van de hoogste rank!

        @『👨‍🔬』Designer Team
        @Lando
        Deze zorgen voor afbeeldingen in de discord/minecraft servers. 
        
        @『🛠 』Helper Team: 
        @Mod | Golden_wolf
        @Gert | Gert_Zeno
        *Gezocht*
        Voert de taken uit die hij/ zij aangeboden krijgt door iemand van het lead team. Deze maakt hij zo snel mogelijk en goed mogelijk af.
        
        @『⚒』Bouwer: 
        *Gezocht*
        Deze bouwen bouwwerken als @『👑 』Lead dat vraagt. Je mag ook zelf met ideën komen 
        -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);
 
        return message.channel.send(botEmbed);

}

module.exports.info = {
    name: "!staff",
    description: "Lijst met het staffteam",
    category: "Informatie",
    aliases: []
}