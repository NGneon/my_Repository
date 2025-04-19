const TelegramApi = require('node-telegram-bot-api');
const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');

const token = '7326293550:AAG73aSy1swxcmyq1_eq4d1eZdXS8TVxPfk'; // Замените на ваш токен
const bot = new TelegramApi(token, { polling: true });

// Объект для отслеживания активных обработок
const processingQueue = new Set();

function removeSpecialCharacters(text) {
    return text.replace(/[^wsа-яА-Я]/gi, '');
}

const SkeletBota = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие бота' },
        { command: '/info', description: 'Информация о пользователе' },
    ]);

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const messageId = msg.message_id;
        const text = msg.text;

        // Уникальный ключ для блокировки
        const processKey = `${chatId}_${messageId}`;

        // Если сообщение уже обрабатывается - игнорируем
        if (processingQueue.has(processKey)) {
            return;
        }

        // Добавляем в очередь обработки
        processingQueue.add(processKey);

        // Объявляем переменные для файлов
        let audioFile, processedAudio, outputFile;

        try {
            if (text === '/start') {
                await bot.sendMessage(chatId, "Привет! Я частушка бот, отправь мне текст, и я сгенерирую тебе частушку\nвот наглядный пример");
                return;
            }
            
            if (text === '/info') {
                await bot.sendMessage(chatId, `Твое имя ${msg.from.first_name} и твой username: ${msg.from.username}`);
                return;
            }
            
            if (!text || text.startsWith('/')) {
                return;
            }
            if(text.length < 100){
                await bot.sendMessage(chatId, 'Твой текст слишком короткий. Минимальная длина текста - 100 символов');
                return
            }
            if (text.length > 150) {
                await bot.sendMessage(chatId, 'Твой текст слишком длинный. Максимальная длина текста - 150 символов.');
                return;
            }

            const cleanedText = removeSpecialCharacters(text);
            if (!cleanedText.trim()) {
                await bot.sendMessage(chatId, 'Бот не озвучивает спец символы. Попробуйте еще раз.');
                return;
            }

            const timestamp = Date.now();
            audioFile = path.join(__dirname, `audio_${timestamp}.mp3`);
            processedAudio = path.join(__dirname, `processed_${timestamp}.mp3`);
            outputFile = path.join(__dirname, `result_${timestamp}.mp3`);
            const musicFile = path.join(__dirname, 'background.mp3');

            // Генерация аудио из текста
            await new Promise((resolve, reject) => {
                new gTTS(text, 'ru').save(audioFile, err => err ? reject(err) : resolve());
            });

            // Обработка аудио
            await new Promise((resolve, reject) => {
                ffmpeg(audioFile)
                    .setFfmpegPath(ffmpegPath)
                    .audioFilters('adelay=10000|10000,volume=6.5,atempo=1.25')
                    .on('error', reject)
                    .on('end', resolve)
                    .save(processedAudio);
            });
            fs.unlinkSync(audioFile);

            // Микширование с музыкой
            await new Promise((resolve, reject) => {
                ffmpeg()
                    .setFfmpegPath(ffmpegPath)
                    .input(musicFile)
                    .input(processedAudio)
                    .complexFilter([
                        '[0:a]volume=0.7[bg]',
                        '[1:a]volume=1.3[voice]',
                        '[bg][voice]amix=inputs=2:duration=longest'
                    ])
                    .on('error', reject)
                    .on('end', resolve)
                    .save(outputFile);
            });
            fs.unlinkSync(processedAudio);

            // Отправка финального аудио пользователю
            await bot.sendAudio(chatId, outputFile);

        } catch (error) {
            console.error(error);
            await bot.sendMessage(chatId, 'Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз.');
        } finally {
            // Удаляем временные файлы если они существуют
            if (audioFile && fs.existsSync(audioFile)) fs.unlinkSync(audioFile);
            if (processedAudio && fs.existsSync(processedAudio)) fs.unlinkSync(processedAudio);
            if (outputFile && fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
            
            // Удаляем из очереди обработки
            processingQueue.delete(processKey);
        }
    });
}

SkeletBota();
