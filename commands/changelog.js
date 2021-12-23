const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("jij kan dit niet doen");

    var seperator = "|";

    if (args[0] == null) {

        var meldingEmbed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#1821CA")
            .setDescription(`Maak een melding door gebruik te maken van: \n melding title ${seperator} bericht ${seperator} kanaal`);

        return message.reply(meldingEmbed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "❗〡change-logg";

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

    channel.send(anounceEmbed).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["<:v_:916671746659221525> ", "❌"]);
    });


}

// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
 time *= 1000;

    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
 for (const reaction of reactions) {
        await message.react(reaction);
    }

    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.info = {
    name: "!log",
    description: "Maak een change-log",
    category: "Modderator"
}