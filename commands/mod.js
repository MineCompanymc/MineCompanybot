const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    /*var botEmbed = new discord.MessageEmbed()
        .setTitle("Commands:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`!ip -> ip's van de servers
        !info -> insta/twitch/discord/youtube
        !staff -> lijstje met staff
        !partner -> Partner info
        !creator -> Content creator info
        !spon -> ArmyHost
        !avatar -> Avatar`);
 
        return message.channel.send(botEmbed);*/

    var commandList = [];
    var prefix = botConfig.prefix;

    bot.commands.forEach(command => {

        var constructor = {

            name: command.info.name,
            description: command.info.description,
            category: command.info.category

        }

        commandList.push(constructor);
        
    });

    var response = "**ModCommands**\n";
    var Informatie = "\n**_Informatie_**\n"
    var Hulp = "\n**_Hulp_**\n"
    var Muziek = "\n**_Muziek_**\n"
    var Modderator = "\n**_Modderator_**\n"

    if (!message.member.hasPermission("KICK_MEMBERS")){

    } else

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];
        
        if(command["category"] == "Modderator"){

            Modderator += `${prefix}${command["name"]}-${command["description"]}\n`;

        }
        
    }

    response += Modderator;

    message.channel.send(response);

}

module.exports.info = {
    name: "!mod",
    description: "Geeft de mod commands weer",
    category: "Modderator"
}