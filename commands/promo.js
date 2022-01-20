const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`> **Informatie-->MineCompanyDiscords!**
    > *~~☰☰☰☰✷☰☰☰☰~~*
    > In dit bericht vind je info over onze Discords, waarvoor ze dienen en doorwie deze geleid worden.
    > Alle omschreven Discords worden beheerd door **𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂**
    > 
    > *~~☰☰☰☰✷☰☰☰☰~~*
    > **𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂**:
    > -*HoofdDiscord waarin ook alles omtrend onze servers wordt geregeld.*
    > -*Hier kan je ook het LeadTeam bereiken bij eventuele vragen of andere dingen*
    > -*Voor iets specifiekere vragen, maak een ticket aan in de daarvoor betrefde Discord!*
    > **Beheerd door:**
    > -MineCompanyLeadTeam
    > 
    > **Link**: https://discord.gg/v2RvS4vP5B
    > 
    > 
    > *~~☰☰☰☰✷☰☰☰☰~~*
    > **𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂 - MT**:
    > -*Hierin komt alles omtrend Minetopie (DDG) en mogelijke give - aways*
    > -*Ook Company Info zal hierin verschijnen!*
    > **Beheerd door:**
    > -MineCompanyLeadTeam
    > 
    > **Link**: https://discord.gg/cURC4ZbZXH
    > 
    > *~~☰☰☰☰✷☰☰☰☰~~*
    > **𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂 - Development**:
    > -*Hierin kan je alle vragen stellen omtrend development!*
    > -*Ook kan je hierin aanvragen doen voor bepaalde soort coderingen!* (Later meer info!)
    > **Beheerd door:**
    > -MineCompanyLeadTeam
    > -MrJason_
    > 
    > **Link**: https://discord.gg/pCjHA4Qxxn
    > 
    > **𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂 Socials!**
    > *~~☰☰☰☰✷☰☰☰☰~~*
    > 
    > **Instagram: **https://bit.ly/3tDkr8W
    > ----
    > **Twitch:** https://bit.ly/3rFEZvG
    > ----
    > **Youtube**: https://bit.ly/3tN9G4e
    > ----
    > **tiktok:** https://bit.ly/3IkPXju
    > ----
    > **Twitter:** https://bit.ly/3In6R11
    > ----
    > 
    > Moesten hierbij eventueel nog vragen zijn? Kan je ofwel een ticket aanmaken in onze hoofdDiscord of @Mine4thomas#5394 een Pm sturen!
    > *Voor Command hulp doe !help*
    > *Voor een ticket, doe !ticket*
    > 
    > **➥Mvg Mine4thomas |CEO MineCompany & Simba_Basil CFO MineCompany**`).then(async msg => {
        var emoji = await promptMessage(msg, message.author, 30, ["<:discord:916670951133958144>","<:Instagram:816756929954185226>","<:twitch:778334172363489322>","<:youtube:816756961247756362>","<:tiktok:916761145279414322>","<:twitter:916761411366035466> "]);
    });

    message.delete(); 

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
    name: "!promo",
    aliases: [],
    description: "Stuur het minecompany partner bericht.",
    category: "Informatie"
}