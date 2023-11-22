import { Events, Message, EmbedBuilder   } from "discord.js"
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
                }
            )
            .setFooter({text: 'Stéphano, l\'expérience vinicole réinventée par GPT'});

        // Répondre au message avec l'embed
        message.reply({embeds: [stephanoEmbed]});
    }
}

export default event;