let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://k.top4top.io/p_2439ma8l42.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

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

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler