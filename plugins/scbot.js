let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `*_Jangan Lupa Donasi_* \ https://saweria.co/HudhaBot`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Scriptnya Disini🗿`,
      url: 'https://teknosimple.com/oYMOSjtwTnLS'
    }
  }],
  footer: '©HudhaGanteng🗿'
})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, '_*Jangan Lupa Donasi Ya Guys*_🗿', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, '_*Nih Ku Kasih*_🗿', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, '_*Cari Sc Bot nya kah?*_🗿', m)
}, 0)
}
handler.help = ['scbot']
handler.tag = ['internet']
handler.command = /^(scbot)$/i

module.exports = handler
