let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/Dana 」
│ •  [6283174295037]
│ •  [085767154127]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
