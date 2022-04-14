// R-Txzy Recode

let util = require('util')
let fetch = require('node-fetch')
let simple = require('./lib/simple')
const uploadImage = require('./lib/uploadImage')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    if (global.db.data == null) await global.loadDatabase()
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!('registered' in user)) user.registered = false
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.nim)) user.age =
