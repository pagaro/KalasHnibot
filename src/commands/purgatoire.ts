import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../../types";

const command: SlashCommand = {
  name: "purgatoire",
  data: new SlashCommandBuilder()
    .setName("purgatoire")
    .setDescription("Purgatoire"),
  execute: async (interaction: CommandInteraction): Promise<void> => {
    interaction.reply("Pong");
  },
};

export default command;
