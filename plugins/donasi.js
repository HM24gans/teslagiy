let handler = async m => m.reply(`
◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ • https://teknosimple.com/qWF6eqsGKZ
│ • https://teknosimple.com/5FeRsrs6aqW
│ *Script Termux Full Ijo Free :* 
│ • https://teknosimple.com/cQAJ7
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa Kasih Donasi Biar Semagat Update
• DANA/PULSA YA
• [6285767154127]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|Donasi)$/i

module.exports = handler
