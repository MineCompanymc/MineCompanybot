const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    
    const kanaal = message.guild.channels.cache.get('858776897047363584');  

    if (args[0] == null) {

        var meldingEmbed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#1821CA")
            .addField("Wijzig status:", "!status *status*")
            .addField(`Huidige status:`, `${kanaal.name}`);

        return message.reply(meldingEmbed);

    }

    var status = message.content.slice(7).trim();


    var embed = new discord.MessageEmbed()
        .setTitle("Status:")
        .setColor("#1821CA")
        .setFooter("status gewijzigd")
        //text
        .setDescription(`**Oude status:** ${kanaal.name}
        **Nieuwe status:** ${status}`);
    
    
    console.log(`status gewijzigid naar ${status}`)

    kanaal.setName(status);  

    message.channel.send(embed);
    
}

module.exports.info = {
    name: "!status",
    description: "Pas de status aan",
    category: "Modderator"
}