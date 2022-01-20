const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var server = message.guild;

    const categoryID = "748953692409167962";
    var category = message.member.guild.channels.cache.find(c => c.name == "🚨Tickets🚨" && c.type == "category");

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator; 

    var ticketBestaat = false 

    var keuzeEmbed = new discord.MessageEmbed()
        .setTitle("MineCompany - Hulpticket:")
        .setColor("#1821CA")
        .setFooter("©️ 𝓜𝓲𝓷𝓮𝓒𝓸𝓶𝓹𝓪𝓷𝔂")
        //text
        .setDescription(`**Kies een categorie:**

            1️⃣: Vraag
            2️⃣: partner aanvraag
            3️⃣: idee
            4️⃣: giveaway gewonnen
            5️⃣: anders
            6️⃣: sollicitatie
            🛑: annuleren
            `);

    
    message.channel.send(keuzeEmbed).then(async msg => {
 
        var emoji = await promptMessage(msg, message.author, 30, ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "🛑"]);
        
         
        if (emoji === "1️⃣") {

            message.guild.channels.cache.forEach(channel => {
        
                if (channel.name == userName.toLowerCase() + "- Vraag") {
                    ticketBestaat = true;
        
                    message.reply("je hebt al een ticket aangemaakt").then(msg => msg.delete({ timeout: 3000 }));
        
                    return;
                }
            });
            
            if (ticketBestaat) return;
        
            var ticketEmbed = new discord.MessageEmbed()
                .setTitle("Hallo " + message.author.username)
                .setFooter("support kannaal wordt aangemaakt");
            message.channel.send(ticketEmbed);
        
            message.guild.channels.create(userName.toLowerCase() + "- Vraag", {type: 'text'}).then(
                (createdChannel) => {
                    createdChannel.setParent(category).then(
                        (settedParent) => {
                                
                            settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });
        
                            settedParent.updateOverwrite(message.author.id, {
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                VIEW_CHANNEL: true
                            });
        
                            var embedParent = new discord.MessageEmbed()
                                .setTitle(`Hallo ${message.author.username}`)
                                .setDescription("waar kunnen wij u mee helpen?");
        
                            settedParent.send(embedParent);
                
                        }
                    ).catch(err => {
                        message.channel.send("er is iets misgelopen");
                });
                }
            ).catch(err => {
                    message.channel.send("er is iets misgelopen");
            });
         
           msg.delete();
         
        } else if (emoji === "2️⃣") {

            message.guild.channels.cache.forEach(channel => {
        
                if (channel.name == userName.toLowerCase() + "- Partner") {
                    ticketBestaat = true;
        
                    message.reply("je hebt al een ticket aangemaakt").then(msg => msg.delete({ timeout: 3000 }));
        
                    return;
                }
            });
            
            if (ticketBestaat) return;
        
            var ticketEmbed = new discord.MessageEmbed()
                .setTitle("Hallo " + message.author.username)
                .setFooter("support kannaal wordt aangemaakt");
            message.channel.send(ticketEmbed);
        
            message.guild.channels.create(userName.toLowerCase() + "- Partner", {type: 'text'}).then(
                (createdChannel) => {
                    createdChannel.setParent(category).then(
                        (settedParent) => {
                                
                            settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });
        
                            settedParent.updateOverwrite(message.author.id, {
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                VIEW_CHANNEL: true
                            });
        
                            var embedParent = new discord.MessageEmbed()
                                .setTitle(`Hallo ${message.author.username}`)
                                .setDescription("waar kunnen wij u mee helpen?");
        
                            settedParent.send(embedParent);
                
                        }
                    ).catch(err => {
                        message.channel.send("er is iets misgelopen");
                });
                }
            ).catch(err => {
                    message.channel.send("er is iets misgelopen");
            });

            msg.delete();
         
        } else if (emoji === "3️⃣") {

            message.guild.channels.cache.forEach(channel => {
        
                if (channel.name == userName.toLowerCase() + "- Idee") {
                    ticketBestaat = true;
        
                    message.reply("je hebt al een ticket aangemaakt").then(msg => msg.delete({ timeout: 3000 }));
        
                    return;
                }
            });
            
            if (ticketBestaat) return;
        
            var ticketEmbed = new discord.MessageEmbed()
                .setTitle("Hallo " + message.author.username)
                .setFooter("support kannaal wordt aangemaakt");
            message.channel.send(ticketEmbed);
        
            message.guild.channels.create(userName.toLowerCase() + "- Idee", {type: 'text'}).then(
                (createdChannel) => {
                    createdChannel.setParent(category).then(
                        (settedParent) => {
                                
                            settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });
        
                            settedParent.updateOverwrite(message.author.id, {
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                VIEW_CHANNEL: true
                            });
        
                            var embedParent = new discord.MessageEmbed()
                                .setTitle(`Hallo ${message.author.username}`)
                                .setDescription("waar kunnen wij u mee helpen?");
        
                            settedParent.send(embedParent);
                
                        }
                    ).catch(err => {
                        message.channel.send("er is iets misgelopen");
                });
                }
            ).catch(err => {
                    message.channel.send("er is iets misgelopen");
            });
         
            msg.delete();
         
        } else if (emoji === "4️⃣") {

            message.guild.channels.cache.forEach(channel => {
        
                if (channel.name == userName.toLowerCase() + "- giveaway") {
                    ticketBestaat = true;
        
                    message.reply("je hebt al een ticket aangemaakt").then(msg => msg.delete({ timeout: 3000 }));
        
                    return;
                }
            });
            
            if (ticketBestaat) return;
        
            var ticketEmbed = new discord.MessageEmbed()
                .setTitle("Hallo " + message.author.username)
                .setFooter("support kannaal wordt aangemaakt");
            message.channel.send(ticketEmbed);
        
            message.guild.channels.create(userName.toLowerCase() + "- giveaway", {type: 'text'}).then(
                (createdChannel) => {
                    createdChannel.setParent(category).then(
                        (settedParent) => {
                                
                            settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });
        
                            settedParent.updateOverwrite(message.author.id, {
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                VIEW_CHANNEL: true
                            });
        
                            var embedParent = new discord.MessageEmbed()
                                .setTitle(`Hallo ${message.author.username}`)
                                .setDescription("waar kunnen wij u mee helpen?");
        
                            settedParent.send(embedParent);
                
                        }
                    ).catch(err => {
                        message.channel.send("er is iets misgelopen");
                });
                }
            ).catch(err => {
                    message.channel.send("er is iets misgelopen");
            });
         
            msg.delete();
         
        } else if (emoji === "5️⃣") {

            message.guild.channels.cache.forEach(channel => {
        
                if (channel.name == userName.toLowerCase() + "- anders") {
                    ticketBestaat = true;
        
                    message.reply("je hebt al een ticket aangemaakt").then(msg => msg.delete({ timeout: 3000 }));
        
                    return;
                }
            });
            
            if (ticketBestaat) return;
        
            var ticketEmbed = new discord.MessageEmbed()
                .setTitle("Hallo " + message.author.username)
                .setFooter("support kannaal wordt aangemaakt");
            message.channel.send(ticketEmbed);
        
            message.guild.channels.create(userName.toLowerCase() + "- anders", {type: 'text'}).then(
                (createdChannel) => {
                    createdChannel.setParent(category).then(
                        (settedParent) => {
                                
                            settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });
        
                            settedParent.updateOverwrite(message.author.id, {
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                VIEW_CHANNEL: true
                            });
        
                            var embedParent = new discord.MessageEmbed()
                                .setTitle(`Hallo ${message.author.username}`)
                                .setDescription("waar kunnen wij u mee helpen?");
        
                            settedParent.send(embedParent);
                
                        }
                    ).catch(err => {
                        message.channel.send("er is iets misgelopen");
                });
                }
            ).catch(err => {
                    message.channel.send("er is iets misgelopen");
            });
         
            msg.delete();

        } else if (emoji === "6️⃣") {

            var categorieID = message.member.guild.channels.cache.find(c => c.name == "📩sollicitaties📩" && c.type == "category");
            const SuportRole = message.guild.roles.cache.find(role => role.name == "sollicitatie suport");
            var SuportID = SuportRole.id;
            var solicitant = message.author;
            var soliKanaal = message.member.guild.channels.cache.find(channel => channel.name === '📩〡sollicitatie');

            var channelName = "sollicitatie-" + message.author.username;

            var ticket = false;

            message.guild.channels.cache.forEach(channel => {

                if(channel.name.toLowerCase() === channelName.toLowerCase()){

                    ticket = true;
                    return message.reply("Je hebt al een ticket").then(msg => msg.delete(3000));

                }
                
            });

            if (ticket) return;

            var ticketAangemaaktEmbed = new discord.MessageEmbed()
                .setTitle("Hallo" + solicitant.username)
                .setColor("#1821CA")
                .setFooter("kanaal wordt aangemaakt");

            message.channel.send(ticketAangemaaktEmbed).then(msg => msg.delete({timeout: 3000 }));

            message.guild.channels.create(channelName, {type: 'text'}).then(
                (createdChannel) => {
                    createdChannel.setParent(categorieID).then(
                        (settedParent) => {

                            settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                            });

                            settedParent.updateOverwrite(message.author.id,{
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                READ_MESSAGE_HISTORY: true,
                                VIEW_CHANNEL: true
                            });

                            settedParent.updateOverwrite(message.guild.roles.cache.get(SuportID),{
                                CREATE_INSTANT_INVITE: false,
                                READ_MESSAGES: true,
                                SEND_MESSAGES: true,
                                ATTACH_FILES: true,
                                CONNECT: true,
                                ADD_REACTIONS: true,
                                READ_MESSAGE_HISTORY: true,
                                VIEW_CHANNEL: true
                            });

                            var ticketAangemaaktEmbed = new discord.MessageEmbed()
                                .setTitle("Hallo " + solicitant.username)
                                .setColor("#1821CA")
                                .setDescription(`Dit is u sollicitatie, vul deze maar rustig in`)
                                .setFooter("sollicitatie");

                            var Vraag1 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 1")
                                .setColor("#1821CA")
                                .setDescription(`Wat is je naam?`);

                            var Vraag2 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 2")
                                .setColor("#1821CA")
                                .setDescription(`**Wat wil je worden?**
                                
                                **Bouwer:**
                                Deze bouwen bouwwerken als @『:crown: 』Lead dat vraagt. Je mag ook zelf met ideën komen
                                
                                **Helper:**
                                Voert de taken uit die hij/ zij aangeboden krijgt door iemand van het lead team. Deze maakt hij zo snel mogelijk en goed mogelijk af.
                                
                                **Moderator:**
                                Regelen de controle over spelers met hacks, buggs, ... en melden bij het zien van 1 meteen iemand van de hoogste rank!
                                
                                **Developer:**
                                Regelen de buggs en maken de opgelegde taken van @『:crown: 』Lead zorgvuldig.
                                
                                **Admin:**
                                Regelen het werken en instellen van de plug-ins op de servers en de mogelijke aanpassingen aan de discord/ discord bot.`);

                            var Vraag3 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 3")
                                .setColor("#1821CA")
                                .setDescription(`Waarom wil je dat worden?`);

                            var Vraag4 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 4")
                                .setColor("#1821CA")
                                .setDescription(`wat kan je ons bieden?`);

                            var Vraag5 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 5")
                                .setColor("#1821CA")
                                .setDescription(`Heb je ervaring?
                                *Zo ja: wat?*`);

                            var Vraag6 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 6")
                                .setColor("#1821CA")
                                .setDescription(`Wat zijn je plus punten?`);

                            var Vraag7 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 7")
                                .setColor("#1821CA")
                                .setDescription(`Wat zijn je min punten?`);

                            var Vraag8 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 8")
                                .setColor("#1821CA")
                                .setDescription(`Heb je een werkende micro en kan je in call?`);

                            var Vraag9 = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Vraag 9")
                                .setColor("#1821CA")
                                .setDescription(`Wat heb je nog te zeggen?`);

                            var Einde = new discord.MessageEmbed()
                                .setTitle("sollicitatie: Einde")
                                .setColor("#1821CA")
                                .setDescription(`Bedankt voor u sollicitatie!
                                
                                Wij zullen deze zo snel mogelijk beoordelen`);

                            settedParent.send(message.author.id);
                            settedParent.send(ticketAangemaaktEmbed);
                            settedParent.send(Vraag1);

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                var antwoord1 = antwoord.first();
                                settedParent.send(Vraag2);
                            
                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                    var antwoord2 = antwoord.first();
                                    settedParent.send(Vraag3)

                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                        var antwoord3 = antwoord.first();
                                        settedParent.send(Vraag4)

                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                            var antwoord4 = antwoord.first();
                                            settedParent.send(Vraag5)

                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                var antwoord5 = antwoord.first();
                                                settedParent.send(Vraag6)

                                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                    var antwoord6 = antwoord.first();
                                                    settedParent.send(Vraag7)

                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                        var antwoord7 = antwoord.first();
                                                        settedParent.send(Vraag8)

                                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                            var antwoord8 = antwoord.first();
                                                            settedParent.send(Vraag9)
                                                            
                                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                                var antwoord9 = antwoord.first();

                                                                var uitkomst = new discord.MessageEmbed()
                                                                    .setTitle(`sollicitatie: ${solicitant.username}`)
                                                                    .setColor("#1821CA")
                                                                    .setTimestamp()
                                                                    .setDescription(`**Naam:**
                                                                    ${antwoord1}
                                                                    
                                                                    **Rol:**
                                                                    ${antwoord2}
                                                                    
                                                                    **Reden:**
                                                                    ${antwoord3}
                                                                    
                                                                    **Wat te bieden:**
                                                                    ${antwoord4}
                                                                    
                                                                    **Ervaring:**
                                                                    ${antwoord5}
                                                                    
                                                                    **Plus punten:**
                                                                    ${antwoord6}
                                                                    
                                                                    **Min punten:**
                                                                    ${antwoord7}

                                                                    **Micro:**
                                                                    ${antwoord8}
                                                                    
                                                                    **Extra:**
                                                                    ${antwoord9}`);
                                                                
                                                                settedParent.bulkDelete(20).then(
                                                                    settedParent.send(Einde),
                                                                    soliKanaal.send(uitkomst)
                                                                )
                                                                })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })

                            settedParent.send(`${solicitant}, <@&${SuportID}>`).then(msg => msg.delete({timeout: 1000 }));

                        }).catch(err => {
                            message.channel.send("Er liep iets Fout");
                        })
                
            })
         
        } else if (emoji === "🛑") {

            message.channel.send("ticket geanuleerd").then(msg => msg.delete({ timeout: 3000 }));
         
            message.delete();
         
        }
         
        });
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
    name: "!ticket",
    description: "Maak een ticket aan",
    category: "Ticket",
    aliases: []
}