const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var categoryID = message.member.guild.channels.cache.find(c => c.name == "🚨Tickets🚨" && c.type == "category");
    const categoryID2 = message.member.guild.channels.cache.find(c => c.name == "📩sollicitaties📩" && c.type == "category");

    if(!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if(message.channel.parentID == categoryID) {
        message.channel.delete();

        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setColor("#FF0000")
            .setDescription("Dit ticket is **afgerond**.")
            .setFooter("ticket gesloten")
    
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === '🤖〡mod-logs');
        if(!ticketChannel) return message.reply("kanaal bestaat niet");
    
        ticketChannel.send(embedCreateTicket);

    } else if (message.channel.parentID == categoryID2) {
        message.channel.delete();

        var embedLoseTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setColor("#FF0000")
            .setDescription("Deze solicitatie is **afgerond**.")
            .setFooter("solicitatie gesloten")
    
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === '🤖〡mod-logs');
        if(!ticketChannel) return message.reply("kanaal bestaat niet");
    
        ticketChannel.send(embedLoseTicket);

    } else {

        message.channel.send("Gebruik deze commad in een ticket!").then(msg => msg.delete({ timeout: 3000 }));
    }
    
}

module.exports.info = {
    name: "!close",
    description: "Sluit een ticket",
    category: "Ticket"
}