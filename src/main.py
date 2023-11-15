import asyncio

import discord
from discord.ext import commands

token = open("data/token.txt", "r").readlines()[0]

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='/', intents=intents, help_command=None)

# ID du channel spécifique où le bot fera l'écho
channel_id = 123456789


@bot.event
async def on_ready():
    print(f'Connecté en tant que {bot.user}')


@bot.event
async def on_message(message):
    # Vérifie si le message vient du channel spécifique et n'est pas du bot
    if message.channel.id == channel_id and message.author != bot.user:
        await message.channel.send(message.content)


async def main():
    async with bot:
        await bot.load_extension('events')
        await bot.load_extension('commands')
        await bot.start(token)


asyncio.run(main())
