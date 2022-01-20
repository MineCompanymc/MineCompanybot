
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    var embed = new discord.MessageEmbed()
        .setColor("#1821CA")
        .setThumbnail(message.author.avatarURL)
        .addField(`${user.tag}`, `${user}`, true)
        .addField("ID:", `${user.id}`, true)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("Status:", `${user.presence.status}`, true)
        .addField("Server:", message.guild.name, true)
        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField("Bot:", `${user.bot}`, true)
        .addField("server gejoint op:", `${user.joinedAt}`, true)
        .addField("Acount gemaakt op:", `${user.createdAt}`, true) 
        .addField("Rollen", member.roles.cache.map(r => '`'+r.name+'`').join(' - '), true)
        .setFooter(`©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂`)
    message.channel.send({embed});

}

module.exports.info = {
    name: "!userinfo",
    aliases: [],
    description: "Geeft de informatie van de speler dat je opgeeft informatie weer",
    category: "Informatie"
}