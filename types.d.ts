import {
  CommandInteraction,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string;
      TOKEN: string;
      GUILD_ID: string;
    }
  }
}

declare module "discord.js" {
  interface Client {
    commands: Collection<string, SlashCommand>;
  }
}

export interface BotEvent {
  name: string;
  once?: boolean | false;
  execute: (...args: any[]) => void;
}

export interface SlashCommand {
  name: string;
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export {};
