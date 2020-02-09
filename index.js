require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

const token = '1021103176:AAGXfMQTZWKuhBQDBwW6NG8SXJLBwzhTb8Y';
const bot = new TelegramBot(token, { polling: true });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running`);

    setInterval(function() {
        bot.sendMessage(chat_id = process.env.CHAT_ID, text = 'test')

        var currentDate = new Date();

        var hourUTC = currentDate.getUTCHours();

        var minutesUTC = currentDate.getUTCMinutes();

        if (minutesUTC == process.env.ALARM_MINUTE) {
            switch (hourUTC) {
                case process.env.ALARM_HOUR:
                    sendMessageToChannel('UTC');
                    break;
                case process.env.ALARM_HOUR - 1:
                    sendMessageToChannel('UTC+1');
                    break;
                case process.env.ALARM_HOUR - 2:
                    sendMessageToChannel('UTC+2');
                    break;
                case process.env.ALARM_HOUR - 3:
                    sendMessageToChannel('UTC+3');
                    break;
                case process.env.ALARM_HOUR - 4:
                    sendMessageToChannel('UTC+4');
                    break;
                case process.env.ALARM_HOUR - 5:
                    sendMessageToChannel('UTC+5');
                    break;
                case process.env.ALARM_HOUR - 6:
                    sendMessageToChannel('UTC+6');
                    break;
                case process.env.ALARM_HOUR - 7:
                    sendMessageToChannel('UTC+7');
                    break;
                case process.env.ALARM_HOUR - 8:
                    sendMessageToChannel('UTC+8');
                    break;
                case process.env.ALARM_HOUR - 9:
                    sendMessageToChannel('UTC+9');
                    break;
                case process.env.ALARM_HOUR - 10:
                    sendMessageToChannel('UTC+10');
                    break;
                case process.env.ALARM_HOUR - 11:
                    sendMessageToChannel('UTC+11');
                    break;
                case process.env.ALARM_HOUR - 12:
                    sendMessageToChannel('UTC+12');
                    break;
                case process.env.ALARM_HOUR - 13:
                    sendMessageToChannel('UTC+13');
                    break;
                case process.env.ALARM_HOUR - 14:
                    sendMessageToChannel('UTC+14');
                    break;
                case process.env.ALARM_HOUR - 15:
                    sendMessageToChannel('UTC+15');
                    break;
                case process.env.ALARM_HOUR - 16:
                    sendMessageToChannel('UTC+16');
                    break;
            }
        }
    }, 60000)
});

function sendMessageToChannel(timezone) {

    var message = "";

    switch (timezone) {
        case 'UTC':
            message = 'São 4:20 no Porto! Faz eçe!'
            break;
        case 'UTC+1':
            message = 'Són les 4:20 a Barcelona! Blau-la!'
            break;
        case 'UTC+2':
            message = 'в Москве 4:20! Blaze это!'
            break;
        case 'UTC+3':
            message = 'الساعة 4:20 في دبي! الحريق ذلك!'
            break;
        case 'UTC+4':
            message = 'یہ اسلام آباد میں 4:20 ہے! اسے جلائیں!'
            break;
        case 'UTC+5':
            message = 'бұл Алматыда 4: 20-да! Қыздыр!'
            break;
        case 'UTC+6':
            message = 'มันเป็น 4:20 ในกรุงเทพ! Blaze มัน!'
            break;
        case 'UTC+7':
            message = '香港时间是4:20！大火吧！'
            break;
        case 'UTC+8':
            message = '東京は4:20です！燃えろ！'
            break;
        case 'UTC+9':
            message = "It's 4:20 in Brisbane! Blaze it!"
            break;
        case 'UTC+10':
            message = "It's 4:20 in Melbourne! Blaze it!"
            break;
        case 'UTC+11':
            message = "It's 4:20 in Suva! Blaze it!"
            break;
        case 'UTC+12':
            message = "It's 4:20 in Auckland! Blaze it!"
            break;
        case 'UTC+13':
            message = "It's 4:20 in Kirimati! Blaze it!"
            break;
        case 'UTC+14':
            message = "It's 4:20 in Adak! Blaze it!"
            break;
        case 'UTC+15':
            message = "It's 4:20 in Anchorage! Blaze it!"
            break;
        case 'UTC+16':
            message = "It's 4:20 in Vancouver! Blaze it!"
            break;
    }

    bot.sendMessage(chat_id = process.env.CHAT_ID, text = message)

}