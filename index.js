const mineflayer = require('mineflayer');
const http = require('http');

// Render kapanmasın diye web portu
http.createServer((req, res) => {
    res.write("Bot 7/24 Aktif!");
    res.end();
}).listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SimsekOriginal.aternos.me',
        port: 63781,
        username: 'SimsekOriginalBot',
        version: false, // Sunucunun sürümünü otomatik algılar
        checkTimeoutInterval: 60 * 1000
    });

    bot.on('spawn', () => {
        console.log('>>> BOT SUNUCUYA BAŞARIYLA GİRDİ! <<<');
        setInterval(() => {
            if (bot.entity) {
                bot.setControlState('jump', true);
                setTimeout(() => bot.setControlState('jump', false), 500);
            }
        }, 30000);
    });

    bot.on('end', (reason) => {
        console.log('Bağlantı koptu, Sebep:', reason);
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log('Bot Hatası:', err.message);
    });
}

createBot();
