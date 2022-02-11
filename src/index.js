const Discord = require('discord.js');
const { READY } = require('./events/types.js');
const { loadAudioStream } = require('./handlers/audioStream.js')

const token = 'OTQxNTI5NzY0OTc0NDUyNzY3.YgXR7A.hwdcfH5VLhqeOknMhYoLRQcFpDA';
console.log(token)

const bot = new Discord.Client();
console.log('etapa 1')
bot.on(READY, () => {
    console.log('Bot is running!');
});
console.log('etapa 2')

loadAudioStream(bot);
console.log('etapa 3')

bot.login(token);
console.log('etapa 4')
