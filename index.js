const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");

const path = require('path');
const activeSongs = new Map();

const fs = require("fs");

const { Console, timeStamp, error } = require("console");
const { Server } = require("http");
const { connect } = require("http2");

const client = new discord.Client();
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.login(process.env.token);

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("geen files gevonden");
        return;
    }

    jsFiles.forEach((f, i) => {
        var fileGet = require(`./commands/${f}`);
        console.log(`file ${f} is geladen`);

        client.commands.set(fileGet.info.name, fileGet);

        fileGet.info.aliases.forEach(alias => {
            client.aliases.set(alias, fileGet.info.name);
        })

    });
});

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("!help", {type: "LISTENING"});

    

});

/*client.on("guildMemberAdd", member => {

    var lid = member.guild.roles.cache.get('748953626789019773');
    var bel = member.guild.roles.cache.get('773111584264028160');

    if (!lid) return console.log(`Rol niet gevonden`);
    if (!bel) return console.log(`Rol niet gevonden`);

    member.roles.add(lid);
    member.roles.add(bel);

    var channel = member.guild.channels.cache.get('748953694447337553');

    if (!channel) return console.log(`kanaal niet gevonden`); 

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hallo ${member.user.username} welkom in MINE COMPANY  Lees de Regels en dan wens ik je nog een leuke Discord ervaring!`)
        .setColor("#00FF00")
        .setFooter("Join")
        .setTimestamp();
 
    channel.send(joinEmbed);

});

client.on("guildMemberRemove", member => {

    var channel = member.guild.channels.cache.get('748953694447337553');

    if (!channel) return console.log(`kanaal niet gevonden`); 

    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Jammer ${member.user.username} is weggegaan`)
        .setColor("#FF0000")
        .setFooter("Leave")
        .setTimestamp();
 
    channel.send(leavenEmbed);

});*/

client.on("guildMemberAdd", member => {

    const logChannel = member.guild.channels.cache.find(channel => channel.name === "『👋』welcome");

    logChannel.send(`Hello ${member.user.tag} welcome to 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂! Read the Rules and then I wish you another fun Discord experience!`)
});

client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "『👋』welcome");
    
    welcomeChannel.send(`Jammer ${member} is weggegaan!`);
});

client.on("messageDelete", messageDeleted => {
    
    if(messageDeleted.author.bot) return; 

    var content = messageDeleted.content; 
    if(!content) content = "geen text gevonden";

    var response = `Bericht ${messageDeleted.id} is verwijderd uit ${messageDeleted.channel}\n **Bericht:** ${content}`;

    var deleteEmbed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({size:4096})}`)
        .setDescription(response)
        .setTimestamp()
        .setColor("#FF0000");

    client.channels.cache.find(c => c.name == "🤖〡auto-mod").send(deleteEmbed);


})



client.on("message", async messsage  => {

    if(messsage.author.bot) return; 
    
    if(messsage.channel.type == "dm") return; 

    


    var prefix = botConfig.prefix; 

    var messageArray = messsage.content.split(" ");

    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var warnUser = messsage.author;

    

    var sentenceUser = "";
    var amountSwearwords = 0; 

    for (let y = 0; y < messageArray.length; y++) {

        const word = messageArray[y].toLowerCase();

        var changeWord = "";

        for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {
            
            if (word.includes(swearWords["vloekwoorden"][i])) {

                changeWord = word.replace(swearWords["vloekwoorden"][i], " ******* ");

                sentenceUser += changeWord;

                warnUserAvatar = `${warnUser.avatar}`;

                amountSwearwords++;

            }
            
        }

        if(!changeWord){
            sentenceUser+= " " + messageArray[y];
        }
        
        
    }

    var warnEmbed = new discord.MessageEmbed()
        .setTitle("Warning")
        .setColor("#FF0000")
        .setFooter("Auto moderator")
        .setDescription(`${warnUser} heeft een woord gezecht dat hij/zij niet mag zeggen`);
    
    var channel =  client.channels.cache.find(c => c.name == "🤖〡auto-mod");


    if(amountSwearwords != 0){

        messsage.delete();
        

        //-------------------

        const channeltje = messsage.channel;
        /*try {
            const webhooks = await channeltje.fetchWebhooks();
            const webhook = webhooks.first();

             await webhook.channel.send({
                content: sentenceUser,
                username: messssage.author.username,
                avatarURL: "https://cdn.discordapp.com/avatars/"+messsage.author.id+"/"+messsage.author.avatar+".jpeg",
            });
        } catch (error) {
        console.error('Error trying to send a message: ', error)};*/

        messsage.channel.send(`${warnUser.username} zei:\n${sentenceUser}`)

        //-----------------

        messsage.channel.send("Op je taal letten aub").then(msg => msg.delete({ timeout: 3000 }));
        channel.send(warnEmbed);
        console.log(`${warnUser.username} vloekte`);
    }

    

    var command = messageArray[0];

    if(!messsage.content.startsWith(prefix)) return; 

    var args = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));

    var options = {
        active: activeSongs
    };

    //levels

    if (commands) commands.run(client, messsage, args, options);

    var randomXp = Math.floor(Math.random(1) * 15) + 1;

    var idUser = messsage.author.id;

    if(!levelFile[idUser]){

        levelFile[idUser] = {

            xp: 0,
            level: 0

        }
    }

    levelFile[idUser].xp += randomXp;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;
    var nextLevelXp = levelUser * 300;
    var levelKannaal = messsage.member.guild.channels.cache.find(channels => channels.name === "🔒〡levels");

    if(nextLevelXp === 0) nextLevelXp = 100;

    if( xpUser >= nextLevelXp){

        levelFile[idUser].level += 1;

        levelFile[idUser].xp = 0;

        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {
            if (err) console.log(err);
        });

        var level10 = messsage.guild.roles.cache.find(r => r.name === "🥉|Level 10");
        var level25 = messsage.guild.roles.cache.find(r => r.name === "🥈|Level 25");
        var level50 = messsage.guild.roles.cache.find(r => r.name === "🏅|Level 50");
        var level100 = messsage.guild.roles.cache.find(r => r.name === "💎|Level 100");


        if(levelFile[idUser].level == 10) {

            

            var member = messsage.member;
            member.roles.add(level10);

            levelKannaal.send("Proficiat <@" + messsage.author.id + ">" + ` je bent level ${levelFile[idUser].level} geworden! 
            Hierbij krijg je de rank **🥉|Level 10**`);

        } else if(levelFile[idUser].level == 25) {

            

            var member = messsage.member;
            member.roles.add(level25);
            member.roles.remove(level10);

            levelKannaal.send("Proficiat <@" + messsage.author.id + ">" + ` je bent level ${levelFile[idUser].level} geworden! 
            Hierbij krijg je de rank **🥈|Level 25**`);

        } else if(levelFile[idUser].level == 50) {

           

            var member = messsage.member;
            member.roles.add(level50);
            member.roles.remove(level25);

            levelKannaal.send("Proficiat <@" + messsage.author.id + ">" + ` je bent level ${levelFile[idUser].level} geworden! 
            Hierbij krijg je de rank **🏅|Level 50**`);

        } else if(levelFile[idUser].level == 100) {

            

            var member = messsage.member;
            member.roles.add(level100);
            member.roles.remove(level50);

            levelKannaal.send("Proficiat <@" + messsage.author.id + ">" + ` je bent level ${levelFile[idUser].level} geworden! 
            Hierbij krijg je de rank **💎|Level 100**`);

        } else {

            levelKannaal.send("Proficiat <@" + messsage.author.id + ">" + ` je bent level ${levelFile[idUser].level} geworden!`);

        }


        

    }
})
