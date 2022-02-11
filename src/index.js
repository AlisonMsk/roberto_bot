const Discord = require('discord.js');
const { READY } = require('./events/types.js');
const { loadAudioStream } = require('./handlers/audioStream.js')
require('dotenv').config();

const token = process.env.token;

const bot = new Discord.Client();

bot.on(READY, () => {
    console.log('Bot is running!');
});

loadAudioStream(bot);

bot.login(token);
