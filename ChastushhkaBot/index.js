const TelegramApi = require('node-telegram-bot-api')
const gTTS = require('gtts')
const fs = require('fs')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('ffmpeg-static')

const token = '7326293550:AAG73aSy1swxcmyq1_eq4d1eZdXS8TVxPfk'
const bot = new TelegramApi(token, { polling: true })

const processingQueue = new Set()

function removeSpecialCharacters(text) {
	return text.replace(/[^а-яА-ЯёЁa-zA-Z0-9\s.,!?-]/gi, '')
}

const SkeletBota = () => {
	bot.setMyCommands([{ command: '/start', description: 'Приветствие бота' }])

	bot.on('message', async msg => {
		const chatId = msg.chat.id
		const messageId = msg.message_id
		const text = msg.text

		const processKey = `${chatId}_${messageId}`

		if (processingQueue.has(processKey)) {
			return
		}

		processingQueue.add(processKey)

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
					console.warn('Пример аудиофайла не найден')
				}
				return
			}

			if (!text || text.startsWith('/')) {
				return
			}

			if (text.length < 90) {
				await bot.sendMessage(
					chatId,
					'Твой текст слишком короткий. Минимальная длина текста - 90 символов'
				)
				return
			}
			if (text.length > 110) {
				await bot.sendMessage(
					chatId,
					'Твой текст слишком длинный. Максимальная длина текста - 110 символов.'
				)
				return
			}

			const cleanedText = removeSpecialCharacters(text)
			if (!cleanedText.trim()) {
				await bot.sendMessage(
					chatId,
					'Бот не озвучивает спец символы. Попробуйте еще раз.'
				)
				return
			}

			processingMessage = await bot.sendMessage(
				chatId,
				'Работаю над частушкой ⌛',
				{ reply_to_message_id: messageId }
			)

			const timestamp = Date.now()
			audioFile = path.join(__dirname, `audio_${timestamp}.mp3`)
			processedAudio = path.join(__dirname, `processed_${timestamp}.mp3`)
			outputFile = path.join(__dirname, `Частушка.mp3`)
			const musicFile = path.join(__dirname, 'background.mp3')

			await new Promise((resolve, reject) => {
				new gTTS(cleanedText, 'ru').save(audioFile, err =>
					err ? reject(err) : resolve()
				)
			})

			await new Promise((resolve, reject) => {
				ffmpeg(audioFile)
					.setFfmpegPath(ffmpegPath)
					.audioFilters('adelay=10000|10000,volume=7,atempo=1.32')
					.on('error', reject)
					.on('end', resolve)
					.save(processedAudio)
			})

			fs.unlinkSync(audioFile)

			await new Promise((resolve, reject) => {
				ffmpeg()
					.setFfmpegPath(ffmpegPath)
					.input(musicFile)
					.input(processedAudio)
					.complexFilter([
						'[0:a]volume=0.7[bg]',
						'[1:a]volume=1.3[voice]',
						'[bg][voice]amix=inputs=2:duration=longest',
					])
					.on('error', reject)
					.on('end', resolve)
					.save(outputFile)
			})
			fs.unlinkSync(processedAudio)

			if (processingMessage) {
				await bot.deleteMessage(chatId, processingMessage.message_id)
			}

			await bot.sendAudio(chatId, outputFile)
		} catch (error) {
			console.error(error)
			if (processingMessage) {
				await bot
					.deleteMessage(chatId, processingMessage.message_id)
					.catch(e => console.error(e))
			}
			await bot.sendMessage(
				chatId,
				'Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз.'
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