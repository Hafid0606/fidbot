let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Hafid
Script: @Nurotomo
Github: 
https://github.com/Hafid0606/fidbot

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @moh.hafidzz
➥ YouTube:
youtube : Hafidz tullah (gaada apa² :v)

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-1358-8216
╠➥ Tsel: 0813-5730-2007
╠➥ Indosat: 0815-1586-0089
║>Request? Wa.me/6288213588216
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

