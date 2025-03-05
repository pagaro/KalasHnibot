import dotenv from "dotenv";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { join } from "path";
import { readdirSync } from "fs";
import { SlashCommand } from "../types";

dotenv.config();

const intents = [
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent,
];
const client = new Client({ intents: intents });
client.commands = new Collection<string, SlashCommand>();

const handlerDir = join(__dirname, "./handlers");

readdirSync(handlerDir).forEach((file) => {
  import(`${handlerDir}/${file}`).then((module) => {
    module.default(client);
  });
});

client.login(process.env.TOKEN);
