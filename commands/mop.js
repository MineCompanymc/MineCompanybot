const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const messages = [`Waarom kon de bakker niet stoppen met lachen? \n\n||Hij vond alles zo melig|| ðð`,
     "Hoe heet een koning die popcorn eet? \n\n||Mais-tijd|| ð",
     "Wat zegt een smurf als hij ergens tegen loopt? \n\n||O nee niet weer een blauwe plek!|| ð", 
     "2 vliegen zitten op een kaal hooft. Zegt de een tegen de andere: Weet je nog dat we hiet vroeger verstoppertje speelde? ðĐâðĶē ðĪĢ",
     "Hoe noem je een eiland vol gekke boeven? \n\n||De Malle-dieven|| ð",
     "Wat is blauw en niet zwaar? \n\n ||licht blauw|| ðĪĢ",
     "Wat is het toppunt van nieuwschierigheid? \n\n||Door het sleutelgat van een glazen deur kijken|| ð"]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    message.channel.send(randomMessage);


}

module.exports.info = {
    name: "!mop",
    description: "Laat de bot een mop vertellen",
    category: "Spelletjes",
    aliases: []
}