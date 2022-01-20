const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var categoryID = message.member.guild.channels.cache.find(c => c.name == "🚨Tickets🚨" && c.type == "category");

    if(message.channel.parentID == categoryID) {

        var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (!addUser) return message.reply("Geen gebruiker meegegeven!");

        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Gebruiker toevoegen")
            .setDescription(`Wil je ${addUser} toevoegen?`)
            .setFooter("Antwoord binnen 30 sec.");

        var embed = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Gebruiker toegevoegd")
            .setTimestamp()
            .addField("Toegevoegde gebuiker" , `${addUser}`)
            .addField("toegevoegd door", `${message.author}`);

        message.channel.send(embedPrompt).then(async msg => {

            message.delete();

            var emoji = await promptMessage(msg, message.author, 30, ["<:v_:916671746659221525>","❌"]);

            if(emoji == "<:v_:916671746659221525>") {

                msg.delete();

                message.channel.updateOverwrite(addUser, {
                    SEND_MESSAGES: true,
                    CREATE_INSTAND_INVITE: false,
                    READ_MESSAGES: true,
                    ATTACH_FILES: true,
                    ADD_REACTIONS: true, 
                    CONNECT: true,
                    READ_MESSAGE_HISTORY: true,
                    VIEW_CHANNEL: true
                    
                });

                message.channel.send(embed);

            }else if(emoji == "❌") {
                msg.delete

                message.reply("toevoeging geanuleerd").then(msg => msg.delete({timeout: 5000}));

            }
        });

    }else {

        message.channel.send("Gebruik deze commad in een ticket!").then(msg => msg.delete({ timeout: 3000 }));
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
    name: "!add",
    description: "Voeg mensen toe aan een ticket.",
    category: "Ticket",
    aliases: []
}