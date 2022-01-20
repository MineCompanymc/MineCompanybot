const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const name = message.content.replace('!call ', '🔊|')
    message.guild.channels.create(name, {
        type: 'voice',
    })
    .then((channel) =>{
        console.log(channel)
        var categorie = message.member.guild.channels.cache.find(c => c.name == "🔒Privé kanalen🔒" && c.type == "category");
        const categorieID = categorie.id;
        channel.setParent(categorieID)
    });

    message.delete();


}

module.exports.info = {
    name: "!call",
    description: "Maak een privé spraakkanaal aan",
    category: "Informatie",
    aliases: []
}