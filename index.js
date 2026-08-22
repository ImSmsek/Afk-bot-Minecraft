const mineflayer = require('mineflayer');
const http = require('http');

// Render kapanmasın diye web portu açıyoruz
http.createServer((req, res) => {
    res.write("Bot 7/24 Aktif!");
    res.end();
}).listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SimsekOriginal.aternos.me',
        port: 63781,
        username: 'SimsekOriginalBot'
    });

    bot.on('spawn', () => {
        console.log('Bot sunucuya girdi!');
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    bot.on('end', () => {
        console.log('Bağlantı koptu, tekrar deneniyor...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', err => console.log(err));
}

createBot();
