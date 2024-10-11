import {Embed, EmbedBuilder, Events, Message, TextChannel} from "discord.js";
import { BotEvent } from "../../types";

const event: BotEvent = {
  name: Events.MessageDelete,
  execute: (message: Message) => {
    if (message.author.bot) return;

    if (message.author.id == "379032082472763392") bouvetteTraitement(message);
    if (message.author.id == "1177183427443822593") lewiwiTraitement(message);
    if (message.author.id == "332581253046075392") youn(message);
  },
};

const bouvetteTraitement = (message: Message) => {
  try {
    const exampleEmbed = new EmbedBuilder()
      .setTitle("Sir Bouvette a supprimé le message suivant")
      .setDescription(message.content);

    if (message.attachments.size > 0) {
      exampleEmbed.setImage(message.attachments.first().url);
    }

    let channel = message.channel;
    (channel as TextChannel).send({ embeds: [exampleEmbed] });
  } catch (e) {
    console.log(e);
  }
};

const youn = (message: Message) => {
  try {
    const exampleEmbed = new EmbedBuilder()
      .setTitle("youn a supprimé le message suivant")
      .setDescription(message.content);

    if (message.attachments.size > 0) {
      exampleEmbed.setImage(message.attachments.first().url);
    }

    let channel = message.channel;
    (channel as TextChannel).send({ embeds: [exampleEmbed] });
  } catch (e) {
    console.log(e);
  }
};

const lewiwiTraitement = (message: Message) => {
  try {
    const exampleEmbed = new EmbedBuilder()
      .setTitle("Lewiwi a supprimé le message suivant :")
      .setDescription(message.content)
      .setFooter({ text: " Tu ferais mieux d'aller à la salle à la place" });

    if (message.attachments.size > 0) {
      exampleEmbed.setImage(message.attachments.first().url);
    }

    let channel = message.channel;
    (channel as TextChannel).send({ embeds: [exampleEmbed] });
  } catch (e) {
    console.log(e);
  }
}; 

export default event;
