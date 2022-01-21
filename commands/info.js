const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Socials:")
        .setColor("#1821CA")
        .setThumbnail("https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`----`)
        .addField
        ("**Instagram:** https://bit.ly/3tDkr8W", "----")
        .addField
        ("**Twitch:** https://bit.ly/3rFEZvG", "----")
        .addField
        ("**Discord:** https://bit.ly/3p7Kphe", "----")
        .addField
        ("**Youtube:** https://bit.ly/3tN9G4e", "----")
        .addField
        ("**tiktok:** https://bit.ly/3IkPXju", "----")
        .addField
        ("**Twitter:** https://bit.ly/3In6R11", "----");
 
    return message.channel.send(botEmbed).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["<:Instagram:816756929954185226> ", "<:twitch:778334172363489322> ", "<:discord:916670951133958144> ", "<:youtube:816756961247756362> ", "<:tiktok:916761145279414322> ", "<:twitter:916761411366035466> "]);
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
    name: "!info",
    description: "Geeft de socials weer",
    category: "Informatie",
    aliases: ["!socials","!insta","!instagram","!dc","!discord","!twitch","!yt","!youtube","!tiktok","!tt","!twitter"]
}