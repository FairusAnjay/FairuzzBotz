// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/KT4eJ3S6G5W9GfFXKOt9c1', ''] // ganti jadi group lu
global.owner = ['6285804325802','48459078537'] // Put your number here //owner eval
global.kontak = ['6285804325802','48459078537'] //Ketika ada yang ngetik #owner
global.mods = ['0','6285804325802'] // Want some help?
global.prems = ['6285804325802','48459078537'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'fairus_gg'
namagithub = 'FairusAnjay'
kasihcaption = `Tuh Owner Ku ☭​᭄`
namakontak1 = '⏤͟͟͞͞𝓕 𝓐 𝓘 𝓡 𝓤 𝓢 𝓑 𝓞 𝓣 𝓩​᭄࿐'
namakontak2 = '⏤͟͟͞͞𝓕𝓪𝓲𝓻𝓾𝔃𝔃​᭄࿐'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'By Fairuz' // ganti aja
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Botz WhatsApp. ")' // ganti aja

//yyy
bc = '⏤͟͟͞͞𝓕𝓪𝓲𝓻𝓾𝔃𝔃​᭄࿐' //AlyaaXy Broadcast
footer = '\n© ⏤͟͟͞͞𝓕𝓪𝓲𝓻𝓾𝔃𝔃​᭄࿐'
namabot = '⏤͟͟͞͞𝓕 𝓐 𝓘 𝓡 𝓤 𝓢 𝓑 𝓞 𝓣 𝓩​᭄࿐ '
namalu = '⏤͟͟͞͞𝓕𝓪𝓲𝓻𝓾𝔃𝔃​᭄࿐'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\https://chat.whatsapp.com/KT4eJ3S6G5W9GfFXKOt9c1'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari AlyaaXzy
global.image = 'https://i.ibb.co/JB5P5n4/Pics-Art-01-15-08-57-32.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
