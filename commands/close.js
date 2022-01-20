const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete(); 

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Sluit ticket:")
        .setColor("#1821CA")
        .setFooter("ticket sluiten")
        //text
        .setDescription(`Heeft u nog verdere vragen?
        
        Zo ja stel ze hieronder.
        Zo nee mag het ticket gesloten worden
        *Dit ticket word morgen gesloten als er geen reactie is*
        
        <:v_:916671746659221525> : open houden
        ❌: sluiten`)
 
    message.channel.send(botEmbed).then(async msg => {
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
    name: "!sluit",
    aliases: [],
    description: "Bericht of het ticket gesloten mag worden",
    category: "Modderator"
}