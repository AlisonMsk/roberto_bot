const Discord = require('discord.js');
const { READY } = require('./events/types.js');
const { loadAudioStream } = require('./handlers/audioStream.js')
require('dotenv').config();

const TOKEN = 'OTQxNTI5NzY0OTc0NDUyNzY3.YgXR7A.tObJxf9a4ueOoiAB5xuEhYUa-WM';

const bot = new Discord.Client();

bot.on(READY, () => {
    console.log('Bot is running!');
});

loadAudioStream(bot);

bot.login(TOKEN);
