let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    if (args[0] == '070698' || args[0] == '661528' || args[0] == '878588' || args[0] == '775636' || args[0] == '098786' || args[0] == '975485') {

    if (new Date - global.db.data.users[m.sender].lastcodereg > 889000000000) {
    if (new Date - global.db.data.users[m.sender].lastcodereg < 889000000000) throw `Anda sudah mengambill code register, Code register anda sudah kadaluarsa..`

    global.db.data.users[m.sender].exp += 1000
    global.db.data.users[m.sender].money += 500
    global.db.data.users[m.sender].limit += 2
    global.db.data.users[m.sender].bank += 1000
    global.db.data.users[m.sender].pet += 2
    global.db.data.users[m.sender].legendary += 1
    global.db.data.users[m.sender].diamond += 3
    global.db.data.users[m.sender].botol += 10
    global.db.data.users[m.sender].kardus += 10
    global.db.data.users[m.sender].kaleng += 10
    global.db.data.users[m.sender].anggur += 5
    global.db.data.users[m.sender].jeruk += 5
    global.db.data.users[m.sender].apel += 5
    global.db.data.users[m.sender].pisang += 5
    global.db.data.users[m.sender].mangga += 5
    global.db.data.users[m.sender].lastcodereg = new Date * 1
    chatnye =`Selamat kamu mendapatkan :\n+1000 Exp âœ¨\n+500 Money ðŸ’¹\n+2 Limit ðŸŽ«\n+1000 Tabungan ðŸ’³\n+2 Pet Crate ðŸ“«\n+1 Legendary ðŸ§°\n+3 Diamond ðŸ’Ž\n+10 Kaleng ðŸ¥«\n+10 Kardus ðŸ“¦\n+10 Botol ðŸ¾\n+5 Anggur ðŸ‡\n+5 Jeruk ðŸŠ\n+5 Apel ðŸŽ\n+5 Mangga ðŸ¥­\n+5 Pisang ðŸŒ`
   conn.reply(m.chat, chatnye, m)
} else conn.reply(m.chat, 'Kode anda sudah kadaluarsa, harap transaksi kembali..', m)
   } else {
        conn.reply(m.chat, `*ã€Œ KODE TIDAK VALID ã€*`, m)
    }
}

handler.command = /^(codereg)$/i
handler.register = true
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
