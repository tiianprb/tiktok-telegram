const TeleBot = require('telebot')
const fetch = require('node-fetch')
global.tokebot = '1675120128:AAHCrgafwCMiJuJXCRkzJxJorzGc1zcWyU0'
global.ownerid = '1245178040'
global.zeksapi = 'apivinz'
global.vhtear = 'Anakanjing123'
global.tobzkey = 'BotWeA'

const bot = new TeleBot({
    token: global.tokebot
})
const axios = require('axios')

global.mess = {
	wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
	success: '✅ Berhasil ✅',
	errlink: '[❗] link yang kamu kirim tidak valid!',
	errsys: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
}


global.isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const getBuffer = async (url, options) => {
console.log({hasil: url})
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}



bot.on('text', async (msg) => {
//console.log(`(${moment(msg.date * 1000).format('HH:mm:ss')}) chat dari: ${msg.from.username || msg.from.first_name || 'None'} - ${msg.chat.type} - ${msg.text}`)
if (!isUrl(msg.text)) return msg.reply.text(`Hello ${msg.from.username}

Welcome to TikTok Downloader bot.
I was created by Alia Cans

By using this bot you can download tiktok videos without watermark.`.trim(), { asReply: true})

if (isUrl(msg.text) && msg.text.includes('tiktok.com')){
msg.reply.text('Trying To Downloading', { asReply: true})
console.log('Dowloading : '+msg.text)
try {
data = await fetch(`https://mhankbarbar.moe/api/tiktok?url=${msg.text}&apiKey=Akbarneh`, {method: 'get'})
  datas = await data.json()
  he = await getBuffer(datas.result)
msg.reply.video(he, { asReply: true, caption: datas.quote })
} catch {
msg.reply.text('Failed To Download', { asReply: true })
}
} 
})

bot.start()






