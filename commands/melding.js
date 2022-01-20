const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("jij kan dit niet doen");

    var seperator = "|";

    if (args[0] == null) {

        var meldingEmbed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#1821CA")
            .setDescription(`Maak een melding door gebruik te maken van: \n melding title ${seperator} bericht`);

        return message.reply(meldingEmbed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "📌〡mededelingen";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        kanaal: argsList[2]

    }

    var anounceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor("#1821CA")
        .setDescription(`${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);

    if(!channel) return message.reply("dit kanaal bestaat niet(of doe de # weg)");

    channel.send(anounceEmbed);
    channel.send("<@&773111584264028160>");

    message.channel.send("melding succesvol verzonden!");


}

module.exports.info = {
    name: "!melding",
    description: "Maak een mededeling",
    category: "Modderator",
    aliases: []
}