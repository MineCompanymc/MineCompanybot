const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("jij kan dit niet doen");

    var seperator = "|";

    if (args[0] == null) {

        var meldingEmbed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#1821CA")
            .setDescription(`Maak een poll door gebruik te maken van: \n !poll titel ${seperator} bericht ${seperator} keuze 1 ${seperator} keuze 2 *${seperator} keuze 3 ${seperator} keuze 4 ${seperator} keuze 5*`);

        return message.reply(meldingEmbed);

    }

    var argsList = args.join(" ").split(seperator);

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        keuze1: argsList[2],
        keuze2: argsList[3],
        keuze3: argsList[4],
        keuze4: argsList[5],
        keuze5: argsList[6]

    }

    var channel = message.member.guild.channels.cache.find(channels => channels.name === "📊〡polls");   

    if (argsList[4] === undefined) {var anounceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor("#1821CA")
        .setDescription(`${options.bericht}
        
        1️⃣: ${options.keuze1}
        
        2️⃣: ${options.keuze2}`)

        .setTimestamp();

    

    channel.send(anounceEmbed).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["1️⃣", "2️⃣"]);
    });

    } else if (argsList[5] === undefined) {var anounceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor("#1821CA")
        .setDescription(`${options.bericht}
        
        1️⃣: ${options.keuze1}
        
        2️⃣: ${options.keuze2}
        
        3️⃣: ${options.keuze3}`)

        .setTimestamp();

    channel.send(anounceEmbed).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["1️⃣", "2️⃣", "3️⃣"]);
    });

    } else if (argsList[6] === undefined) {var anounceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor("#1821CA")
        .setDescription(`${options.bericht}
        
        1️⃣: ${options.keuze1}
        
        2️⃣: ${options.keuze2}
        
        3️⃣: ${options.keuze3}
        
        4️⃣: ${options.keuze4}`)

        .setTimestamp();

    channel.send(anounceEmbed).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["1️⃣", "2️⃣", "3️⃣", "4️⃣"]);
    });

    } else {var anounceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor("#1821CA")
        .setDescription(`${options.bericht}
        
        1️⃣: ${options.keuze1}
        
        2️⃣: ${options.keuze2}
        
        3️⃣: ${options.keuze3}
        
        4️⃣: ${options.keuze4}
        
        5️⃣: ${options.keuze5}`)

        .setTimestamp();

    channel.send(anounceEmbed).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"]);
    });

    }
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
    name: "!poll",
    aliases: [],
    description: "Maak een poll aan",
    category: "Modderator"
}