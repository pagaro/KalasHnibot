import { Events, Message, EmbedBuilder } from "discord.js"
import { BotEvent } from "../../types"
const event: BotEvent = {
    name: Events.MessageCreate,
    execute: (message:Message) => {
        let content = message.content;
		if (message.author.bot) return;

        if (content.toLowerCase().includes('entreprise'))
            entrepriseTraitement(message);

        if (content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes('employe'))
            employeeTraitement(message);

        if (content.toLowerCase().includes('pas de pied'))
            piedTraitement(message);

        if (message.author.id == '332581253046075392')
            younnTraitement(message);

    }
}


const younnTraitement = (message:Message) =>{
    if (Math.random() < 0.05)
        message.react(Math.random() < 0.5 ? "<:flop2:1181550549473177670>" : "<:flop:1180053151437566002>");
}

const employeeTraitement = (message:Message) =>{
    message.reply("ON DIT SALARIÉ BOUFFON !")
}

const piedTraitement = (message:Message) =>{
    message.reply("Non mais c'est pa drôle en fait je connais quelqu’un à l'hôpital qui n'a pas de pieds! 🤬" +
        "\nhttps://tenor.com/6xPF.gif")
}


const entrepriseTraitement = (message:Message) =>{
    // 1 chance sur 4 
    let random = Math.floor(Math.random() * 4);
    if (random == 0) {
        const stephanoEmbed = new EmbedBuilder()
            .setColor('#0099ff') // Vous pouvez changer la couleur de l'embed ici
            .setTitle('Stéphano: L\'innovation vinicole par Thibaut. Vivez l\'expérience des caves à vin connectées, contrôlez et préservez votre collection via smartphone.')
            .setDescription('Entrez dans l\'ère du vin connecté avec Stéphano, l\'innovation signée Thibaut...')
            .addFields(
                {
                    name: 'Caves à Vin Connectées',
                    value: 'Contrôlez et maintenez la qualité de votre collection depuis votre smartphone. Une technologie avancée pour une conservation optimale de vos vins.'
                },
                {
                    name: 'Votre Sommelier Personnel',
                    value: 'Choisissez votre plat, et notre application vous suggère le vin idéal pour l\'accompagner. Une expérience sur mesure pour chaque dégustation.'
                },
                {
                    name: 'Technologie et Tradition',
                    value: 'Un mariage parfait entre technologie et tradition, garantissant une harmonie gustative à chaque bouchée. Savourez le vin comme jamais auparavant.'
                },
                {
                    name: 'Rejoignez la Révolution Stéphano',
                    value: 'Élevez votre passion pour le vin à un niveau jamais atteint. Stéphano, pour les amateurs de vin qui cherchent l\'excellence et l\'innovation.'
                },
                {
                    name :'Lorem Ipsum web site',
                    value:'[Stephano](https://stephano.app)'
                }
            )
            .setFooter({text: 'Stéphano, l\'expérience vinicole réinventée par GPT'});

        // Répondre au message avec l'embed
        message.reply({embeds: [stephanoEmbed]});
    }
}

export default event;