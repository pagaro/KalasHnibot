#!/home/lucas/.nvm/versions/node/v20.5.0/bin/node
import dotenv from 'dotenv';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { join } from 'path';
import { readdirSync } from 'fs';

dotenv.config();

const intents = [
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.MessageContent
];
const client = new Client({ intents: intents });

const handlerDir = join(__dirname, './handlers');

readdirSync(handlerDir).forEach((file) => {
    require(`${handlerDir}/${file}`)(client);
});

client.login(process.env.TOKEN)