const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    tiktokdlv3(args[0]).then(r => {
    let video = r.video.no_watermark
    conn.sendFile(m.chat, video, 'K', `${command} *Downloader By Hudha*
*Suport BOT Agar Terus Akfif*
http://saweria.co/HudhaBot`, m)
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.premium = true
handler.group = true

handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler
