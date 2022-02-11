const Discord = require('discord.js');
const { READY } = require('./events/types.js');
const { loadAudioStream } = require('./handlers/audioStream.js')

const token = 'OTQxNTUxNzIyODg1Njg1Mjg4.YgXmXw.8yKqV102OY_IKxwI_ETQlMXKoZ0';
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
