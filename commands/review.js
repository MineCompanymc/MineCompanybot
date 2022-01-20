const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const amountStars = args[0];

    const helpembed = new discord.MessageEmbed()
        .setTitle(`Review`)
        .setDescription(`Laat een rieview achter met: \n!review *sterren tussen 1&5* *review text*`)
        .setColor("#1821CA");


    if(!amountStars || amountStars < 1 || amountStars > 5) return message.channel.send(helpembed);

    var text = args.splice(1, args.length).join(" ") || '*Geen text gegeven*';

    var channel = message.member.guild.channels.cache.get("863358380247744522");

    if(!channel) return message.channel.send("kanaal bestaat niet");

    var stars = "";
    for (let i = 0; i < amountStars; i++) {
        
        stars+= ":star:";
        
    }

    message.delete();

    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een review geshreven`)
        .setColor("#1821CA")
        .addField("Sterren: ", stars)
        .addField("review: ", text);

    message.channel.send("Je review is succesvol verzonden");

    return channel.send(embed);

}

module.exports.info = {
    name: "!review",
    description: "Schrijf een review",
    category: "Informatie",
    aliases: []
}