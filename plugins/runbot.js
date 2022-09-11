let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `*_Jasa Run Bot_*
*5RB*:10 Hari
*10RB*:20 Hari
*20RB*:30 Hari

*_Bot On 24 Jam Karena Run Via RDP_*`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Chat Jika Berminat 😉`,
      url: 'https://wa.me/6283174295037?text=Assalamualaikum%20Bang%20Saya%20Mau%20Run%20Bot%20'
    }
  }],
  footer: '©Hudha x ikhsan'
})
}, 1000)
setTimeout(() => {
conn.reply(m.chat, 'Harga? Sudah Pasti murah', m)
}, 500)
setTimeout(() => {
conn.reply(m.chat, 'Ready Jadi Run BOT', m)
}, 0)
}
handler.help = ['runbot']
handler.tag = ['internet']
handler.command = /^(runbot)$/i

module.exports = handler
