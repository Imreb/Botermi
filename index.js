const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready', ()=>{
    console.log("Bot is online.");
})

Client.on('message', (message)=>{
	if(!message.content.startsWith(prefix)) return;

	if(message.content.startsWith(prefix + "hallo")){
		message.channel.send("Hallo du da! Naa?" + message.author + "moin.");
		
	}
	if(message.content.startsWith(prefix + "commands")){
		message.channel.send("Schau in deinen Privatnachrichten nach!");
		message.author.send("Hallo, du da! Meine bisherigen Commands sind !commands und !hallo. yaay.");
	}


})


Client.login("NDg1MDg3ODkxMzMzMDU0NDk3.DmxwJA.7nEStmzompynRTz-HSIJpI1Fb10");