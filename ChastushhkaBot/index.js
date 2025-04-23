const TelegramApi = require('node-telegram-bot-api') //Telegram Api
const gTTS = require('gtts') // google Text-To-Speech
const fs = require('fs') // file system
const path = require('path') // path to file
const ffmpeg = require('fluent-ffmpeg') // Обработка аудио (очень сильный инструмент для обработки мультимедиа)
const ffmpegPath = require('ffmpeg-static') // путь к ffmpeg

const token = '7326293550:AAG73aSy1swxcmyq1_eq4d1eZdXS8TVxPfk'
const bot = new TelegramApi(token, { polling: true }) //бот опрашивает сервер Telegram на наличие новых сообщений

const processingQueue = new Set() //предотвращение дублирования

function removeSpecialCharacters(text) {
	return text.replace(/[^а-яА-ЯёЁa-zA-Z\s.,!?-]/gi, '') // оставляет только буквы и основные знаки препинания
}

const SkeletBota = () => {
	bot.setMyCommands([{ command: '/start', description: 'Приветствие бота' }])
	bot.on('message', async msg => {
		const chatId = msg.chat.id
		const messageId = msg.message_id
		const text = msg.text

		const processKey = `${chatId}_${messageId}` 

		if (processingQueue.has(processKey)) { //has - если сообщение в обработке, то предотвращает дублирование
			return
		} //проверка на дублирование

		processingQueue.add(processKey) //добавление в очередь

		let audioFile, processedAudio, outputFile
		let processingMessage = null

		try {
			if (text === '/start') {
				await bot.sendMessage(
					chatId,
					'🎵 Привет! Я частушка бот\nОтправь мне текст от 90 до 110 символов, и я превращу его в музыкальную частушку!'
				)

				const exampleAudio = path.join(__dirname, 'Chastushka_example.mp3')
				if (fs.existsSync(exampleAudio)) {
					await bot.sendAudio(chatId, exampleAudio)
				} else {
					console.warn('Пример аудиофайла не найден ❌')
				}
				return
			}
			//игнор команд
			if (!text || text.startsWith('/')) {
				return
			} 
			//проверка длины текста
			if (text.length < 90) {
				await bot.sendMessage(
					chatId,
					'Твой текст слишком короткий. Минимальная длина текста - 90 символов ⬇️'
				)
				return
			}
			if (text.length > 110) {
				await bot.sendMessage(
					chatId,
					'Твой текст слишком длинный. Максимальная длина текста - 110 символов ⬆️'
				)
				return
			}
			//проверка на присутствие цифр
			if (/\d/.test(text)) {
				await bot.sendMessage(
					chatId,
					'Бот не озвучивает цифры. Пожалуйста, удалите цифры из текста и попробуйте снова 🔄'
				)
				return
			} 
			//чистка текста
			const cleanedText = removeSpecialCharacters(text)
			if (!cleanedText.trim()) {
				await bot.sendMessage(
					chatId,
					'Бот не озвучивает спец символы. Попробуйте еще раз 🔄'
				)
				return
			}

			processingMessage = await bot.sendMessage(
				chatId,
				'Работаю над частушкой ⌛',
				{ reply_to_message_id: messageId }
			)

			const timestamp = Date.now()
			audioFile = path.join(__dirname, `audio_${timestamp}.mp3`) //временный файл для Text-To-Speech
			processedAudio = path.join(__dirname, `processed_${timestamp}.mp3`) //Обработанный голос
			outputFile = path.join(__dirname, `Частушка.mp3`) //Финальный файл
			const musicFile = path.join(__dirname, 'background.mp3') //музыка на заднем фоне

			await new Promise((resolve, reject) => {
				new gTTS(cleanedText, 'ru').save(audioFile, err =>
					err ? reject(err) : resolve()
				)
			})

			await new Promise((resolve, reject) => {
				ffmpeg(audioFile) //обработка
					.setFfmpegPath(ffmpegPath) //путь к FFmpeg
					.audioFilters('adelay=10000|10000,volume=7,atempo=1.27') //задержка музыки заднего фона, громкость голоса и темп голоса
					.on('error', reject)
					.on('end', resolve)
					.save(processedAudio)
			})

			fs.unlinkSync(audioFile) //удаление временного файла TTS

			await new Promise((resolve, reject) => {
				ffmpeg()
					.setFfmpegPath(ffmpegPath)
					.input(musicFile) //фоновая музыка
					.input(processedAudio) //обработанный голос
					.complexFilter([
						'[0:a]volume=0.7[bg]', //громкость фоновой музыки
						'[1:a]volume=1.3[voice]', //громкость голоса
						'[bg][voice]amix=inputs=2:duration=longest', //смешивание
					])
					.on('error', reject)
					.on('end', resolve)
					.save(outputFile)
			})
			fs.unlinkSync(processedAudio) //удаление промежутачного файла

			if (processingMessage) {
				await bot.deleteMessage(chatId, processingMessage.message_id) //удаление сообщения о работе с частушкой
			}

			await bot.sendAudio(chatId, outputFile) //бот отправляет частушку пользователю
		} catch (error) {
			console.error(error)
			if (processingMessage) {
				await bot
					.deleteMessage(chatId, processingMessage.message_id)
					.catch(e => console.error(e))
			}
			await bot.sendMessage(
				chatId,
				'Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз ❌'
			)
		} finally {
			try {
				if (audioFile && fs.existsSync(audioFile)) fs.unlinkSync(audioFile)
				if (processedAudio && fs.existsSync(processedAudio))
					fs.unlinkSync(processedAudio)
				if (outputFile && fs.existsSync(outputFile)) fs.unlinkSync(outputFile)
			} catch (err) {
				console.error('Ошибка при удалении файлов:', err)
			}

			processingQueue.delete(processKey)
		}
	})
}

SkeletBota()
/////////////////////////////////////////////////////////////////////////////////////////////////////
//1. Проверка на недостаточность длину - 123
//2. Проверка на переизбыточность длины
//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//3. Проверка на озвучивание спец. символов
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//4. Частушка для примера:

// На дискотеку я спешу,
// В джинсах новых и в сапожках!
// Ты гляди, но не дыши —
// Я танцую не для кошечек!