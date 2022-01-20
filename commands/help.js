const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

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

    var response = "**Botcommands**\n";
    var Informatie = "\n**_Informatie_**\n"
    var Ticket = "\n**_Ticket_**\n"
    var Muziek = "\n**_Muziek_**\n"
    var Modderator = "\n**_Modderator_**\n"
    var Spelletjes = "\n**_Spelletjes_**\n"

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];
        
        if(command["category"] == "Informatie"){

            Informatie += `${prefix}${command["name"]}-${command["description"]}\n`;

        }else if(command["category"] == "Ticket"){

            Ticket += `${prefix}${command["name"]}-${command["description"]}\n`;

        }else if(command["category"] == "Spelletjes"){

            Spelletjes += `${prefix}${command["name"]}-${command["description"]}\n`;

        }
        
    }

    response += Informatie;
    response += Ticket;
    response += Spelletjes;

    message.channel.send(response);

    message.delete();

}

module.exports.info = {
    name: "!help",
    aliases: [],
    description: "Geeft de commands weer",
    category: "Informatie"
}