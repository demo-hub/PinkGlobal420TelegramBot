require('dotenv').config()

module.exports = {
    timeNotification: function(bot) {
        setInterval(function() {
            var currentDate = new Date();

            var hourUTC = currentDate.getUTCHours();

            var minutesUTC = currentDate.getUTCMinutes();

            if (minutesUTC == process.env.ALARM_MINUTE) {
                switch (parseInt(hourUTC)) {
                    case parseInt(process.env.ALARM_HOUR):
                        sendMessageToChannel(bot, 'UTC');
                        break;
                    case process.env.ALARM_HOUR < 1 ? 24 + (process.env.ALARM_HOUR - 1):
                        process.env.ALARM_HOUR - 1:
                            sendMessageToChannel(bot, 'UTC+1');
                        break;
                    case process.env.ALARM_HOUR < 2 ? 24 + (process.env.ALARM_HOUR - 2):
                        process.env.ALARM_HOUR - 2:
                            sendMessageToChannel(bot, 'UTC+2');
                        break;
                    case process.env.ALARM_HOUR < 3 ? 24 + (process.env.ALARM_HOUR - 3):
                        process.env.ALARM_HOUR - 3:
                            sendMessageToChannel(bot, 'UTC+3');
                        break;
                    case process.env.ALARM_HOUR < 4 ? 24 + (process.env.ALARM_HOUR - 4):
                        process.env.ALARM_HOUR - 4:
                            sendMessageToChannel(bot, 'UTC+4');
                        break;
                    case process.env.ALARM_HOUR < 5 ? 24 + (process.env.ALARM_HOUR - 5):
                        process.env.ALARM_HOUR - 5:
                            sendMessageToChannel(bot, 'UTC+5');
                        break;
                    case process.env.ALARM_HOUR < 6 ? 24 + (process.env.ALARM_HOUR - 6):
                        process.env.ALARM_HOUR - 6:
                            sendMessageToChannel(bot, 'UTC+6');
                        break;
                    case process.env.ALARM_HOUR < 7 ? 24 + (process.env.ALARM_HOUR - 7):
                        process.env.ALARM_HOUR - 7:
                            sendMessageToChannel(bot, 'UTC+7');
                        break;
                    case process.env.ALARM_HOUR < 8 ? 24 + (process.env.ALARM_HOUR - 8):
                        process.env.ALARM_HOUR - 8:
                            sendMessageToChannel(bot, 'UTC+8');
                        break;
                    case process.env.ALARM_HOUR < 9 ? 24 + (process.env.ALARM_HOUR - 9):
                        process.env.ALARM_HOUR - 9:
                            sendMessageToChannel(bot, 'UTC+9');
                        break;
                    case process.env.ALARM_HOUR < 10 ? 24 + (process.env.ALARM_HOUR - 10):
                        process.env.ALARM_HOUR - 10:
                            sendMessageToChannel(bot, 'UTC+10');
                        break;
                    case process.env.ALARM_HOUR < 11 ? 24 + (process.env.ALARM_HOUR - 11):
                        process.env.ALARM_HOUR - 11:
                            sendMessageToChannel(bot, 'UTC+11');
                        break;
                    case process.env.ALARM_HOUR < 12 ? 24 + (process.env.ALARM_HOUR - 12):
                        process.env.ALARM_HOUR - 12:
                            sendMessageToChannel(bot, 'UTC+12');
                        break;
                    case process.env.ALARM_HOUR < 13 ? 24 + (process.env.ALARM_HOUR - 13):
                        process.env.ALARM_HOUR - 13:
                            sendMessageToChannel(bot, 'UTC+13');
                        break;
                    case process.env.ALARM_HOUR < 14 ? 24 + (process.env.ALARM_HOUR - 14):
                        process.env.ALARM_HOUR - 14:
                            sendMessageToChannel(bot, 'UTC+14');
                        break;
                    case process.env.ALARM_HOUR < 15 ? 24 + (process.env.ALARM_HOUR - 15):
                        process.env.ALARM_HOUR - 15:
                            sendMessageToChannel(bot, 'UTC+15');
                        break;
                    case process.env.ALARM_HOUR < 16 ? 24 + (process.env.ALARM_HOUR - 16):
                        process.env.ALARM_HOUR - 16:
                            sendMessageToChannel(bot, 'UTC+16');
                        break;
                }
            }
        }, 60000)
    }
}

function sendMessageToChannel(bot, timezone) {

    var message = "";

    switch (timezone) {
        case 'UTC':
            message = 'São 4:20 no Porto! Faz eçe caralho!'
            break;
        case 'UTC+1':
            message = 'Són les 4:20 a Barcelona! Blau-la!'
            break;
        case 'UTC+2':
            message = 'Rīgā ir 4:20! Iededzini to!'
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