const Discord = require("discord.js");
const { measureMemory } = require("vm");
const Client = new Discord.Client;
const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationel");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(message.channel.name != "commandes") return;

    //!ping
    if(message.content == prefix + "ping") {
        message.channel.send("pong");
    }

    //!stats
    if(message.content == prefix + "stats") {
        message.channel.send(message.author.username + " a poste un message");
        message.channel.send("il a pour identifiant : " + message.author.id);
    }
 
});

Client.on("guildMemberAdd", member => {
    console.log("un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "764755797716238341").send("Hey " + "**" + member.displayName + "**" + ", bienvenue sur **xGang** !");
    member.roles.add("764759871060181002").then(mbr => {
        console.log("role attribué avec succès pour " + member.displayName);
    }).catch(() => {
        console.log("Le role n'a pas pu etre attribué");
    });
});

Client.on("guildMemberRemove", member => {
    console.log("un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "764755797716238341").send("Aurevoir " + "**" + member.displayName + "**" + ". Il est parti si vite :sob:");
});

Client.login(process.env.TOKEN);
