let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : NoelDaniel
║│➸ ```UMUR``` : 14thn
║│➸ ```ASAL``` : SABAH,MALAYSIA
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv
║│➸ ```ISTAGRAM``` : http://instagram.com/zalfapontianak
║│➸ ```WHATSAPP``` : http://wa.me/60147751029
╰────────❉

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), m)
}

handler.help = ['infoary']
handler.tags = ['main', 'utama']
handler.command = /^(infoary)$/i

handler.exp = 150

module.exports = handler
