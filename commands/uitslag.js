const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    /*const categoryID = "748953692409167962";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator; 

    var ticketBestaat = false 

    var keuzeEmbed = new discord.MessageEmbed()
        .setTitle("MineCompany - Hulpticket:")
        .setColor("#1821CA")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`**Kies een categorie:**

            `);

    
    message.channel.send(keuzeEmbed).then(async msg => {
 
        var emoji = await promptMessage(msg, message.author, 30, [ "✔", "❌"]);
        
         
        if (emoji === "✔") {

           
           
         
           msg.delete();
         
        } else if (emoji === "❌") {

            
            msg.delete();
        }
    });*/
}
 
        

    

// Emojis aan teksten kopellen.
/*async function promptMessage(message, author, time, reactions) {
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
}*/

module.exports.info = {
    name: "!uitslag",
    aliases: [],
    description: "Maak de uitslag van een solicitatie",
    category: "Modderator"
}