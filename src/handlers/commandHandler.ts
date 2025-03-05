import { Client, REST, Routes } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "../../types";
import dotenv from "dotenv";

dotenv.config();

export default async (client: Client) => {
  const clientID = process.env.CLIENT_ID;
  const token = process.env.TOKEN;
  const body: any[] = [];

  const commandsDir = join(__dirname, "../commands");
  readdirSync(commandsDir).forEach((file) => {
    if (!file.endsWith(".ts")) return;
    import(`${commandsDir}/${file}`).then((module) => {
      const command = module.default as SlashCommand;
      console.log(`Command ${command.name} loaded!`);
      body.push(command.data.toJSON());
      client.commands.set(command.name, command);
    });
  });

  const rest = new REST({ version: "10" }).setToken(token);
  try {
    await rest.put(Routes.applicationCommands(clientID), {
      body: body,
    });
  } catch (error) {
    console.error(error);
  }
};
