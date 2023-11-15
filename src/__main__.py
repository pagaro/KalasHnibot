import asyncio

import discord
import os
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()
token = os.getenv("DISCORD_TOKEN")

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='/', intents=intents, help_command=None)

# ID du channel spécifique où le bot fera l'écho
channel_id = 1049232463496495167


@bot.event
async def on_ready():
    await bot.wait_until_ready()
    message_channel = bot.get_channel(channel_id)
    await message_channel.send(f'{bot.user} up')
    print(f'Connecté en tant que {bot.user}')


@bot.event
async def on_message(message):
    # Vérifie si le message vient du channel spécifique et n'est pas du bot
    if message.channel.id == channel_id and message.author != bot.user:
        message_channel = bot.get_channel(channel_id)
        await message_channel.send(message.content)


async def main():
    async with bot:
        await bot.start(token)


asyncio.run(main())
