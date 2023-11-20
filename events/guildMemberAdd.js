// Intents needed: GUILD_MEMBERS
module.exports = {
	name: 'guildMemberAdd',
	execute(client,member) {
		let channel = member.guild.systemChannel;
		if (!channel) return;
		channel.send(`Heu par contre ${member.user.username} faut toquer avant !`);
	},
};  