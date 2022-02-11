const Discord = require('discord.js');
const { READY } = require('./events/types.js');
const { loadAudioStream } = require('./handlers/audioStream.js')
require('dotenv').config();

const TOKEN = 'OTQxNTI5NzY0OTc0NDUyNzY3.YgXR7A.vVCF1ga36RjextyIXV29e7PcyaE';

const bot = new Discord.Client();

bot.on(READY, () => {
    console.log('Bot is running!');
});

loadAudioStream(bot);

bot.login(TOKEN);
