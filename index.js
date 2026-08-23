const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
    res.write("Bot 7/24 Aktif!");
    res.end();
}).listen(process.env.PORT || 3000);

function createBot() {
    console.log('Sunucuya bağlanılıyor...');

    const bot = mineflayer.createBot({
        host: 'SimsekOriginal.aternos.me',
        port: 63781, // Aternos dinamik Java portu
        username: 'SimsekOriginalBot',
        version: false, // Geyser/ViaVersion otomatik sürüm eşleme
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
