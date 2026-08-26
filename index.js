const mineflayer = require('mineflayer');

function createBot() {
    console.log('Sunucuya bağlanılıyor...');

    const bot = mineflayer.createBot({
        host: 'SimsekOriginal.aternos.me',
        username: 'ImSmsek3',
        version: '1.21.10'
    });

    bot.on('spawn', () => {
        console.log('>>> BOT SUNUCUYA BAŞARIYLA GİRDİ! <<<');
    });

    bot.on('end', (reason) => {
        console.log('Bağlantı koptu:', reason);
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => {
        console.log('Bot Hatası:', err.message);
    });
}

createBot();
