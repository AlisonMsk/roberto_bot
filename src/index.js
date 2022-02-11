const Discord = require('discord.js');
const { READY } = require('./events/types.js');
const { loadAudioStream } = require('./handlers/audioStream.js')

const TOKEN = 'OTQxNTI5NzY0OTc0NDUyNzY3.YgXR7A.eVqwDqGrIwmbzwLibiUpCYEja_o';
console.log(TOKEN)

const bot = new Discord.Client();

bot.on(READY, () => {
    console.log('Bot is running!');
});

loadAudioStream(bot);

bot.login(TOKEN);
