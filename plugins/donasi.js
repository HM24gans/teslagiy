let handler = async m => m.reply(`
◪ 📮 *DONASI DAN SCRIPT BOT*
│ *Jangan lupa Kasih Donasi Biar Semagat Update*
│ 「 Donasi • Pulsa/Dana 」
│ • [6285767154127]
│ *Script BOT :* 
│ • https://teknosimple.com/qWF6eqsGKZ
│ • https://teknosimple.com/j4dzEmXzj1
│ • https://teknosimple.com/qWF6eqsGKZ
│ *Script Termux Full Ijo Free :* 
│ • https://teknosimple.com/WxEwnqaa2
╰──────────═┅═──────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
