import { Client, Events, GuildMember } from "discord.js"
import { BotEvent } from "../../types"
const event: BotEvent = {
    name: Events.GuildMemberAdd,
    execute: (member:GuildMember) => {
        let channel = member.guild.systemChannel;
		if (!channel) return;
		channel.send(`Heu par contre ${member.user.username} faut toquer avant !`);
    }
}

export default event;