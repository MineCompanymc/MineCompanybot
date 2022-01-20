const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

     
    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member
          .ban({
            reason: 'niet flink',
          })
          .then(() => {

            message.reply(`${user.tag} is geband`);
          })
          .catch(err => {

            message.reply('Ik kan niet bannen');

            console.error(err);
          });
      } else {

        message.reply("Deze persoon bestaat niet");
      }
    } else {

      message.reply("Mag je niet doen!");
    }
  }


module.exports.info = {
    name: "!ban",
    description: "Ban een user",
    category: "Modderator",
    aliases: []
}