import {Events, Message, EmbedBuilder, MessageReaction, User, Client, TextChannel} from "discord.js";
import { BotEvent } from "../../types";
import emojis from "../data/emojis.json"
const event: BotEvent = {
    name: Events.MessageReactionAdd,
    execute: async (message: MessageReaction,user:User,client:Client) => {
        if (user.bot) return;
        let emoji = message.emoji.id;

        // Message from eliott
        
        if (user.id == '379032082472763392'){
            let isEmojis = false;
            for (let i = 0; i < emojis.length; i++){
                if (emojis[i].id == emoji){
                    isEmojis = true;
                }
            }

            if (isEmojis){
                let guildMember = message.message.guild.members.cache.get(user.id);
                let channel = message.message.channel;
                // guildMember.kick("Pas d'émotes, pas le droit d'utiliser d'émotes")
                console.log("kick")
                await (channel as TextChannel).send("Sir bouvette ne souhaitant pas avoir d'émojis à son nom, il n'a pas le droit d'en utiliser. Il a par conséquent été kick du serveur.")
            }
            
            
        }    
    },
};




export default event;
