const TelegramApi = require('node-telegram-bot-api')
const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');
const token = '7326293550:AAG73aSy1swxcmyq1_eq4d1eZdXS8TVxPfk';

const bot = new TelegramApi(token, { polling: true });
function removeSpecialCharacters(text) {
    return text.replace(/[^\w\sа-яА-Я]/gi, '');
}
const SkeletBota = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие бота' },
        { command: '/info', description: 'Информация о пользователе' },
    ]);
    let i = 1;
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;
        if (text === '/start') {
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, 'Привет! Я частушка бот, отправь мне текст, и я сгенерирую тебе частушку');
        }
        if (text === '/info') {
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, `Твое имя ${msg.from.first_name} и твой username: ${msg.from.username}`);
        }
        if (text.length > 0) {
            if (text.length < 150) {
                if (!msg.text.startsWith('/')) {
                    const audioFile = path.join(__dirname, `частушка${i++}.mp3`);
                    const cleanedText = removeSpecialCharacters(text);
                    if (!cleanedText.trim()) {
                        bot.sendMessage(chatId, 'Бот не озвучивает спец символы. Попробуйте еще раз.');
                        return;
                    }
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
            } else{
                bot.sendMessage(chatId, 'Твой текст слишком длинный. Максимальная длина текста - 150 символов.');
            }
        } else {
            bot.sendMessage(chatId, 'Ты не отправил текст. Пожалуйста, отправь текст для генерации частушики.');
        }
    });
}
SkeletBota();