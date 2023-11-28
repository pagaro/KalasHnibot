import { CommandInteraction,Collection,SlashCommandBuilder } from "discord.js";

declare global {
    namespace NodeJS {
        interface ProcessEnv{
            CLIENT_ID: string;
            TOKEN: string;
        }
    }
}

declare module "discord.js" {
    interface Client {
        commands: Collection<string, SlashCommand>;
    }
}

export interface BotEvent{
    name: string;
    once?: boolean | false;
    async execute: (...args) => void;
}

export {}