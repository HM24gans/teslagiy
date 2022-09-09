let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `Jangan Lupa\nKlik tombolnya`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Ambil Di sini 🗿`,
      url: 'https://teknosimple.com/oYMOSjtwTnLS'
    }
  }],
  footer: '*Ni Ambil*🗿'
})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, '*Jangan Lupa Donasi Ya gyg*🗿', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, '*Nih Ku Kasih*🗿', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, '*Cari Sc Bot nya kah?* 🗿', m)
}, 0)
}
handler.help = ['forme']
handler.tag = ['internet']
handler.command = /^(forme)$/i

module.exports = handler
