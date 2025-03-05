import fs from "fs";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import dotenv from "dotenv";
import { SlashCommand } from "../types";

dotenv.config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const main = async () => {
  const commands = [];
  const commandFiles = fs
    .readdirSync("./src/commands")
    .filter((file) => file.endsWith(".ts"));

  for (const file of commandFiles) {
    const command = (await import(`commands/${file}`)).default as SlashCommand;
    commands.push(command.data.toJSON());
  }

  const rest = new REST({ version: "9" }).setToken(token);

  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
};

main();
