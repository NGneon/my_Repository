const TelegramApi = require('node-telegram-bot-api')
const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');
const token = '7326293550:AAG73aSy1swxcmyq1_eq4d1eZdXS8TVxPfk';

const bot = new TelegramApi(token, { polling: true });

const SkeletBota=()=>{
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие бота' },
        { command: '/info', description: 'Информация о пользователе' },
    ]);
    let i = 1;
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Привет! Я частушка бот, отправь мне текст, и я сгенерирую тебе частушку');
    });
    
    bot.onText(/\/info/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, `Твое имя ${msg.from.first_name} и твой username: ${msg.from.username}`);
    });
    
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;
    
        if (!msg.text.startsWith('/')) {
            const audioFile = path.join(__dirname, `частушка${i++}.mp3`);
    
            const gtts = new gTTS(text, 'ru');
            gtts.save(audioFile, function (err, result) {
                if (err) {
                    bot.sendMessage(chatId, 'Произошла ошибка при создании аудио.');
                    return;
                }
                bot.sendAudio(chatId, audioFile)
                    .then(() => {
                        fs.unlinkSync(audioFile);
                    })
                    .catch((err) => {
                        bot.sendMessage(chatId, 'Произошла ошибка при отправке аудио.');
                    });
            });
        }
    });
}
SkeletBota();