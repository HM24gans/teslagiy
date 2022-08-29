let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/Dana 」
│ •  [6283174295037]
│ •  [6283174295037]
│ •  [INFO DOANG DONASI KAGA]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
