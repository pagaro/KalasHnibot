import { Client, Events, Message } from "discord.js"
import { BotEvent } from "../../types"
const event: BotEvent = {
    name: Events.MessageCreate,
    execute: (message:Message) => {
        let content = message.content;
		if (message.author.bot) return;
        if (content.toLowerCase().includes('entreprise'))
            entrepriseTraitement(message);

        if (content.toLowerCase().includes('employé'))
            employeeTraitement(message);
    }
}
const employeeTraitement = (message:Message) =>{
    message.reply("ON DIT SALARIÉ BOUFON !")
}

const entrepriseTraitement = (message:Message) =>{
    // 1 chance sur 4 
    let random = Math.floor(Math.random() * 4);
    if (random == 0)
        message.reply("Connaissez-vous Stéphano ? C'est l'entreprise de Thibaut !"); 
}

export default event;