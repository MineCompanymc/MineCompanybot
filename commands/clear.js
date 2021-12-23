const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.");

    if (!args[0]) return message.reply("Geef een aantal op").then(msg => msg.delete({ timeout: 3000 }));

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Ben je loemp ik kan toch geen 0 berichten verwijderen").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Ik heb 1 bericht verwijderd").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Ik heb ${args[0]} berichten verwijderd`).then(msg => msg.delete({ timeout: 3000 }));
            }

        }).catch(err => {
            if (err) return message.channel.send(`Ik kan geen berichten verwijderen ouder dan 2 weken!`);
        });

    } else {
        return message.reply("Geef een getal op.");
    }
        var deleteuser = message.author;
        var deletechannel = message.channel;

    var embedDelete = new discord.MessageEmbed()
            .setTitle("Berichten verwijderd")
            .setColor("#FF0000")
            .setTimestamp()
            .setDescription(`${deleteuser} heeft ${args[0]} berichten verwijderd in ${deletechannel}`)
            .setFooter("Moderation");
    
            var modlogschannel = message.member.guild.channels.cache.find(channel => channel.name === '🤖〡mod-logs');
    
    modlogschannel.send(embedDelete);

}

module.exports.info = {
    name: "!clear",
    description: "Clear een aantal berichten",
    category: "Modderator"
}