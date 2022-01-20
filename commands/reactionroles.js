const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const channel = "773122271266734080";
    const emojiBel = "🔔";
    const emojiMc = "778345193077473341";
    const emojiDj = "🎧";
    const emojiEng = ":regional_indicator_s:";
    const emojiNl = ":regional_indicator_e:";
    const emojiPromo = "🧸";

    const rolBel = message.guild.roles.cache.find(role => role.id === "773111584264028160");
    const rolMc = message.guild.roles.cache.find(role => role.id === "748953626411794541");
    const rolDj = message.guild.roles.cache.find(role => role.id === "796070982863290397");
    const rolEng = message.guild.roles.cache.find(role => role.id === "933356489760972867");
    const rolNl = message.guild.roles.cache.find(role => role.id === "933354936551473232");
    const rolPromo = message.guild.roles.cache.find(role => role.id === "933752304136511620");

    const embedEng = new discord.MessageEmbed()
        .setTitle("Roles")
        .setDescription(`Which channels would you like to see?
            In this post you can turn on/off different channels.
        
            How does it work?
            We have an emoji for each game. If you click on the emoji below this post, you will access that particular channel. If you click on the emoji again, your access to the channel goes away again. This way you can decide which channels you would like to see any time of the day.
        
            See our channels below:
            
            🔔: Notification
            <:minecraft:778345193077473341>: Server
            🎧: DJ-Role
            :regional_indicator_s:: English
            :regional_indicator_e:: Dutch
            🧸: Promotion`)
        .setColor("#1821CA")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        .setAuthor("MineCompany","https://cdn.discordapp.com/attachments/703149562847690752/768074837989916742/Mine_Company_Logo_-_kopie.png");

    var embedMessageEng = await message.channel.send(embedEng);
    embedEng.react(emojiBel);
    embedEng.react(emojiMc);
    embedEng.react(emojiDj);
    embedEng.react(emojiEng);
    embedEng.react(emojiNl);
    embedEng.react(emojiPromo);

    discord.Client.on("messageReactionAdd", async (reaction,user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if(reaction.emoji.name == emojiBel) {
                await message.guild.members.cache.get(user.id).roles.add(rolBel);

            }else if(reaction.emoji.name == emojiMc) {
                await message.guild.members.cache.get(user.id).roles.add(rolMc);
                
            }else if(reaction.emoji.name == emojiDj) {
                await message.guild.members.cache.get(user.id).roles.add(rolDj);

            }else if(reaction.emoji.name == emojiEng) {
                await message.guild.members.cache.get(user.id).roles.add(rolEng);

            }else if(reaction.emoji.name == emojiNl) {
                await message.guild.members.cache.get(user.id).roles.add(rolNl);

            }else if(reaction.emoji.name == emojiPromo) {
                await message.guild.members.cache.get(user.id).roles.add(rolPromo);
            }

        }else {
            return
        }
    });

    discord.Client.on("messageReactionRemove", async (reaction,user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if(reaction.emoji.name == emojiBel) {
                await message.guild.members.cache.get(user.id).roles.remove(rolBel);

            }else if(reaction.emoji.name == emojiMc) {
                await message.guild.members.cache.get(user.id).roles.remove(rolMc);
                
            }else if(reaction.emoji.name == emojiDj) {
                await message.guild.members.cache.get(user.id).roles.remove(rolDj);

            }else if(reaction.emoji.name == emojiEng) {
                await message.guild.members.cache.get(user.id).roles.remove(rolEng);

            }else if(reaction.emoji.name == emojiNl) {
                await message.guild.members.cache.get(user.id).roles.remove(rolNl);

            }else if(reaction.emoji.name == emojiPromo) {
                await message.guild.members.cache.get(user.id).roles.remove(rolPromo);
            }

        }else {
            return
        }
    });

}

module.exports.info = {
    name: "!rolls",
    description: "Rollen bericht",
    category: "Modderator",
    aliases: []
}
