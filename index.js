require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running`);

    bot.sendMessage(chat_id = process.env.CHAT_ID, text = 'Updated to version 2.0.0\nAdded:\n- /cities command that gives the main cities of each timezone\nFixed:\n- Fixed the setInterval time to avoid double notifications\n- Notification in the alarm hour\n- City in UTC+11 timezone was wrong (changed to Norfolk Island)\n- Typo in Kiribati (was Kirimati)\n\nIf you have any doubt, contribution or suggestion please feel free to hit me up in Telegram @suembra or create an issue in Github https://github.com/demo-hub/PinkGlobal420TelegramBot')

    setInterval(function() {
        var currentDate = new Date();

        var hourUTC = currentDate.getUTCHours();

        var minutesUTC = currentDate.getUTCMinutes();

        if (minutesUTC == process.env.ALARM_MINUTE) {
            switch (parseInt(hourUTC)) {
                case parseInt(process.env.ALARM_HOUR):
                    sendMessageToChannel('UTC');
                    break;
                case process.env.ALARM_HOUR < 1 ? 24 + (process.env.ALARM_HOUR - 1):
                    process.env.ALARM_HOUR - 1:
                        sendMessageToChannel('UTC+1');
                    break;
                case process.env.ALARM_HOUR < 2 ? 24 + (process.env.ALARM_HOUR - 2):
                    process.env.ALARM_HOUR - 2:
                        sendMessageToChannel('UTC+2');
                    break;
                case process.env.ALARM_HOUR < 3 ? 24 + (process.env.ALARM_HOUR - 3):
                    process.env.ALARM_HOUR - 3:
                        sendMessageToChannel('UTC+3');
                    break;
                case process.env.ALARM_HOUR < 4 ? 24 + (process.env.ALARM_HOUR - 4):
                    process.env.ALARM_HOUR - 4:
                        sendMessageToChannel('UTC+4');
                    break;
                case process.env.ALARM_HOUR < 5 ? 24 + (process.env.ALARM_HOUR - 5):
                    process.env.ALARM_HOUR - 5:
                        sendMessageToChannel('UTC+5');
                    break;
                case process.env.ALARM_HOUR < 6 ? 24 + (process.env.ALARM_HOUR - 6):
                    process.env.ALARM_HOUR - 6:
                        sendMessageToChannel('UTC+6');
                    break;
                case process.env.ALARM_HOUR < 7 ? 24 + (process.env.ALARM_HOUR - 7):
                    process.env.ALARM_HOUR - 7:
                        sendMessageToChannel('UTC+7');
                    break;
                case process.env.ALARM_HOUR < 8 ? 24 + (process.env.ALARM_HOUR - 8):
                    process.env.ALARM_HOUR - 8:
                        sendMessageToChannel('UTC+8');
                    break;
                case process.env.ALARM_HOUR < 9 ? 24 + (process.env.ALARM_HOUR - 9):
                    process.env.ALARM_HOUR - 9:
                        sendMessageToChannel('UTC+9');
                    break;
                case process.env.ALARM_HOUR < 10 ? 24 + (process.env.ALARM_HOUR - 10):
                    process.env.ALARM_HOUR - 10:
                        sendMessageToChannel('UTC+10');
                    break;
                case process.env.ALARM_HOUR < 11 ? 24 + (process.env.ALARM_HOUR - 11):
                    process.env.ALARM_HOUR - 11:
                        sendMessageToChannel('UTC+11');
                    break;
                case process.env.ALARM_HOUR < 12 ? 24 + (process.env.ALARM_HOUR - 12):
                    process.env.ALARM_HOUR - 12:
                        sendMessageToChannel('UTC+12');
                    break;
                case process.env.ALARM_HOUR < 13 ? 24 + (process.env.ALARM_HOUR - 13):
                    process.env.ALARM_HOUR - 13:
                        sendMessageToChannel('UTC+13');
                    break;
                case process.env.ALARM_HOUR < 14 ? 24 + (process.env.ALARM_HOUR - 14):
                    process.env.ALARM_HOUR - 14:
                        sendMessageToChannel('UTC+14');
                    break;
                case process.env.ALARM_HOUR < 15 ? 24 + (process.env.ALARM_HOUR - 15):
                    process.env.ALARM_HOUR - 15:
                        sendMessageToChannel('UTC+15');
                    break;
                case process.env.ALARM_HOUR < 16 ? 24 + (process.env.ALARM_HOUR - 16):
                    process.env.ALARM_HOUR - 16:
                        sendMessageToChannel('UTC+16');
                    break;
            }
        }
    }, 60000)

    bot.onText(/\/cities(.?)/, (msg, match) => {
        const timezone = match.input.replace('/cities', '').trim()
        if (timezone) {
            mainCities(msg.chat.id, timezone)
        } else {
            bot.sendMessage(msg.chat.id, 'What timezone?', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'UTC',
                            callback_data: 'UTC'
                        }],
                        [{
                            text: 'UTC+1',
                            callback_data: 'UTC+1'
                        }],
                        [{
                            text: 'UTC+2',
                            callback_data: 'UTC+2'
                        }],
                        [{
                            text: 'UTC+3',
                            callback_data: 'UTC+3'
                        }],
                        [{
                            text: 'UTC+4',
                            callback_data: 'UTC+4'
                        }],
                        [{
                            text: 'UTC+5',
                            callback_data: 'UTC+5'
                        }],
                        [{
                            text: 'UTC+6',
                            callback_data: 'UTC+6'
                        }],
                        [{
                            text: 'UTC+7',
                            callback_data: 'UTC+7'
                        }],
                        [{
                            text: 'UTC+8',
                            callback_data: 'UTC+8'
                        }],
                        [{
                            text: 'UTC+9',
                            callback_data: 'UTC+9'
                        }],
                        [{
                            text: 'UTC+10',
                            callback_data: 'UTC+10'
                        }],
                        [{
                            text: 'UTC+11',
                            callback_data: 'UTC+11'
                        }],
                        [{
                            text: 'UTC+12',
                            callback_data: 'UTC+12'
                        }],
                        [{
                            text: 'UTC+13',
                            callback_data: 'UTC+13'
                        }],
                        [{
                            text: 'UTC+14',
                            callback_data: 'UTC+14'
                        }],
                        [{
                            text: 'UTC+15',
                            callback_data: 'UTC+15'
                        }],
                        [{
                            text: 'UTC+16',
                            callback_data: 'UTC+16'
                        }]
                    ]
                }
            })

            bot.on('callback_query', (callbackQuery) => {
                mainCities(callbackQuery.message.chat.id, callbackQuery.data)
            })
        }
    })

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
            message = "It's 4:20 in Norfollk Island! Blaze it!"
            break;
        case 'UTC+12':
            message = "It's 4:20 in Auckland! Blaze it!"
            break;
        case 'UTC+13':
            message = "It's 4:20 in Kiribati! Blaze it!"
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

function mainCities(chatId, timezone) {
    switch (timezone) {
        case 'UTC':
            bot.sendMessage(chatId, 'Main cities: London, Dublin, Lisbon, Abidjan, Accra, Dakar')
            break;
        case 'UTC+1':
            bot.sendMessage(chatId, 'Main cities: Berlin, Rome, Paris, Madrid, Warsaw, Lagos, Kinshasa, Algiers, Casablanca')
            break;
        case 'UTC+2':
            bot.sendMessage(chatId, 'Main cities: Cairo, Johannesburg, Khartoum, Kiev, Bucharest, Athens, Jerusalem')
            break;
        case 'UTC+3':
            bot.sendMessage(chatId, 'Main cities: Moscow, Istanbul, Riyadh, Baghdad, Addis Ababa, Doha')
            break;
        case 'UTC+4':
            bot.sendMessage(chatId, 'Main cities: Dubai, Baku, Tbilisi, Yerevan, Samara')
            break;
        case 'UTC+5':
            bot.sendMessage(chatId, 'Main cities: Karachi, Tashkent, Yekaterinburg')
            break;
        case 'UTC+6':
            bot.sendMessage(chatId, 'Main cities: Dhaka, Almaty, Omsk')
            break;
        case 'UTC+7':
            bot.sendMessage(chatId, 'Main cities: Jakarta, Ho Chi Minh City, Bangkok, Krasnoyarsk')
            break;
        case 'UTC+8':
            bot.sendMessage(chatId, 'Main cities: Shanghai, Taipei, Kuala Lumpur, Singapore, Perth, Manila, Makassar, Irkutsk')
            break;
        case 'UTC+9':
            bot.sendMessage(chatId, 'Main cities: Tokyo, Seoul, Pyongyang, Ambon, Yakutsk')
            break;
        case 'UTC+10':
            bot.sendMessage(chatId, 'Main cities: Sydney, Port Moresby, Vladivostok')
            break;
        case 'UTC+11':
            bot.sendMessage(chatId, 'Main cities: Norfolk Island')
            break;
        case 'UTC+12':
            bot.sendMessage(chatId, 'Main cities: Auckland, Suva, Petropavlovsk-Kamchatsky')
            break;
        case 'UTC+13':
            bot.sendMessage(chatId, 'Main cities: Kiribati')
            break;
        case 'UTC+14':
            bot.sendMessage(chatId, 'Main cities: Adak')
            break;
        case 'UTC+15':
            bot.sendMessage(chatId, 'Main cities: Anchorage')
            break;
        case 'UTC+16':
            bot.sendMessage(chatId, 'Main cities: Vancouver')
            break;
        default:
            bot.sendMessage(chatId, 'Invalid timezone or timezone not supported yet')
            break;
    }
}