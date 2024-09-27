import { EmbedBuilder, Events, Message, TextChannel} from "discord.js";
import {BotEvent} from "../../types";

const event: BotEvent = {
    name: Events.MessageDelete,
    execute: (message: Message) => {
        if (message.author.bot) return;

        if (message.author.id == '379032082472763392')
            bouvetteTraitement(message);

    },


}

const bouvetteTraitement = (message: Message) => {
    try {
        const exampleEmbed = new EmbedBuilder()
            .setTitle("Sir Bouvette a supprimé le message suivant")
            .setDescription(message.content)

        if (message.attachments.size > 0) {
            exampleEmbed.setImage(message.attachments.first().url);
        }
        let channel = message.channel;
        (channel as TextChannel).send({ embeds: [exampleEmbed] });
    }catch (e){
        console.log(e)
    }
}

export default event;