const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnercount;

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Geen perms");

    winnercount = args[0];
    time = args[1]*1000;
    item = args.splice(2, args.length).join(" ");

    if(!winnercount) return message.reply("Het aantal winaars is niet meegegeven");
    if(!time) return message.reply("Geen tijd gegeven");
    if(!item) return message.reply("Geen winnersitem meegegeven")

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000))

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Einde: ${dateEnd}`)
        .setDescription(item);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function() {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();
        
        for (let i = 0; i < peopleReacted.length; i++) {
        
            if(peopleReacted[i].id == bot.users.id){
               peopleReacted.splice(i,1);
               continue; 
            }
            
        }

        if(peopleReacted.length == 0) {
            return message.channel.send("Er heeft niemand gewonnen");
        }

        for (let y = 0; y < winnercount.length; y++) {
            
            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);
            for (let o = 0; o < winners.length; o++) {
                
                if(winnercount[o] = peopleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }
                
            }
            
            if(!inList){
                winners.push(peopleReacted[random]);
            }
        }
        for (let y = 0; y < winners.length; y++) {

            message.channel.send("Profficiat: " + winners[y].username + ` Je hebt gewonnen: ${item}`);
            
        }

    }, time * 1000)

}

module.exports.info = {
    name: "!giveaway",
    aliases: [],
    description: "Start een giveaway",
    category: "Modderator"
}