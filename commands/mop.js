const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const messages = [`Waarom kon de bakker niet stoppen met lachen? \n\n||Hij vond alles zo melig|| 😂🍞`,
     "Hoe heet een koning die popcorn eet? \n\n||Mais-tijd|| 😂",
     "Wat zegt een smurf als hij ergens tegen loopt? \n\n||O nee niet weer een blauwe plek!|| 😆", 
     "2 vliegen zitten op een kaal hooft. Zegt de een tegen de andere: Weet je nog dat we hiet vroeger verstoppertje speelde? 👩‍🦲 🤣",
     "Hoe noem je een eiland vol gekke boeven? \n\n||De Malle-dieven|| 😂",
     "Wat is blauw en niet zwaar? \n\n ||licht blauw|| 🤣",
     "Wat is het toppunt van nieuwschierigheid? \n\n||Door het sleutelgat van een glazen deur kijken|| 😂"]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    message.channel.send(randomMessage);


}

module.exports.info = {
    name: "!mop",
    description: "Laat de bot een mop vertellen",
    category: "Spelletjes",
    aliases: []
}