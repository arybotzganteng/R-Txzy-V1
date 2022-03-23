let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *_INFORMASI OWNER_* ´ˎ˗
│ ✎ _Nama_ : *NoelDaniel*
│ ✎ _Umur_ : *14*
│ ✎ _Kelas_ : *privasi*
│ ✎ _Asal_ : *SABAH,MALYSIA*
│ ✎ Jantina : *Laki*
│ ✎ Status : *Janda Anak 1000*
│ ✎ _Official Grup_ : *https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv*
│ ✎ _TikTok_ : *https://vt.tiktok.com/ZSdRaWNh1/*
│ ✎ Github : *http://github.com/arybotzganteng*
│ ✎ _WhatsApp_ :
│    *wa.me/60147751029*
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infoary']
handler.tags = ['main', 'utama']
handler.command = /^(infoary)$/i

handler.exp = 150

module.exports = handler
