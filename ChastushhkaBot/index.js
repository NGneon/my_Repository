const TelegramApi = require('node-telegram-bot-api')

const token = '7326293550:AAG73aSy1swxcmyq1_eq4d1eZdXS8TVxPfk';

const bot = new TelegramApi(token, { polling: true });



const start=()=>{
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие бота' },
        { command: '/info', description: 'Информация о пользователе' }
    ]);
    bot.on('message', async (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start') {
            return bot.sendMessage(chatId, `Привет, это частушка бот`);
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} и твой username: ${msg.from.username}`)
        }
        return bot.sendMessage(chatId, `Ты написал "${text}"`);
    })
}
start();