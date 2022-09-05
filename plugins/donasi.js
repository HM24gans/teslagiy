let handler = async m => m.reply(`
◪ 📮 *DONASI DAN SCRIPT BOT*
│ *Jangan lupa Kasih Donasi Biar Semagat Update*
│ 「 Donasi • Pulsa/Dana 」
│ • [6285767154127]
│ *Script :* 
│ • https://teknosimple.com/qWF6eqsGKZ
│ • https://teknosimple.com/5FeRsrs6aqW
│ *Script Termux Full Ijo Free :* 
│ • https://teknosimple.com/cQAJ7
╰──────────═┅═──────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
