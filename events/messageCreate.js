// Intents needed: GUILD_MEMBERS, GUILD_MESSAGES, MESSAGE_CONTENTS
module.exports = {
	name: "messageCreate",
	execute(client,message) {
        let content = message.content;
		if (message.author.bot) return;

        if (content.toLowerCase().includes('employé'))
            employeeTraitement(message);
	},

};  

const employeeTraitement = (message) =>{
    message.reply("ON DIT SALARIÉ BOUFON !")
}