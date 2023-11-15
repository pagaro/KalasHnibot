// Intents needed: GUILD_MEMBERS
module.exports = {
	name: 'guildMemberAdd',
	execute(client,member) {
		console.log(`New member joined! ${member.user.tag}`);
	},
};  