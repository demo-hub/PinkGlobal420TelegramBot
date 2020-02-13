require('dotenv').config()

export default class TimeNotification {

    constructor() { }

    timeNotification(bot: any) {
        setInterval(function() {
            var currentDate = new Date();

            var alarmHour = parseInt(process.env.ALARM_HOUR)

            var hourUTC = currentDate.getUTCHours();

            var minutesUTC = currentDate.getUTCMinutes();

            if (minutesUTC == parseInt(process.env.ALARM_MINUTE)) {
                switch (hourUTC) {
                    case parseInt(process.env.ALARM_HOUR):
                        this.sendMessageToChannel(bot, 'UTC');
                        break;
                    case alarmHour < 1 ? 24 + (alarmHour - 1) :
                        alarmHour - 1:
                        this.sendMessageToChannel(bot, 'UTC+1');
                        break;
                    case alarmHour < 2 ? 24 + (alarmHour - 2):
                        alarmHour - 2:
                        this.sendMessageToChannel(bot, 'UTC+2');
                        break;
                    case alarmHour < 3 ? 24 + (alarmHour - 3):
                        alarmHour - 3:
                        this.sendMessageToChannel(bot, 'UTC+3');
                        break;
                    case alarmHour < 4 ? 24 + (alarmHour - 4):
                        alarmHour - 4:
                        this.sendMessageToChannel(bot, 'UTC+4');
                        break;
                    case alarmHour < 5 ? 24 + (alarmHour - 5):
                        alarmHour - 5:
                        this.sendMessageToChannel(bot, 'UTC+5');
                        break;
                    case alarmHour < 6 ? 24 + (alarmHour - 6):
                        alarmHour - 6:
                        this.sendMessageToChannel(bot, 'UTC+6');
                        break;
                    case alarmHour < 7 ? 24 + (alarmHour - 7):
                        alarmHour - 7:
                        this.sendMessageToChannel(bot, 'UTC+7');
                        break;
                    case alarmHour < 8 ? 24 + (alarmHour - 8):
                        alarmHour - 8:
                        this.sendMessageToChannel(bot, 'UTC+8');
                        break;
                    case alarmHour < 9 ? 24 + (alarmHour - 9):
                        alarmHour - 9:
                        this.sendMessageToChannel(bot, 'UTC+9');
                        break;
                    case alarmHour < 10 ? 24 + (alarmHour - 10):
                        alarmHour - 10:
                        this.sendMessageToChannel(bot, 'UTC+10');
                        break;
                    case alarmHour < 11 ? 24 + (alarmHour - 11):
                        alarmHour - 11:
                        this.sendMessageToChannel(bot, 'UTC+11');
                        break;
                    case alarmHour < 12 ? 24 + (alarmHour - 12):
                        alarmHour - 12:
                        this.sendMessageToChannel(bot, 'UTC+12');
                        break;
                    case alarmHour < 13 ? 24 + (alarmHour - 13):
                        alarmHour - 13:
                        this.sendMessageToChannel(bot, 'UTC+13');
                        break;
                    case alarmHour < 14 ? 24 + (alarmHour - 14):
                        alarmHour - 14:
                        this.sendMessageToChannel(bot, 'UTC+14');
                        break;
                    case alarmHour < 15 ? 24 + (alarmHour - 15):
                        alarmHour - 15:
                        this.sendMessageToChannel(bot, 'UTC+15');
                        break;
                    case alarmHour < 16 ? 24 + (alarmHour - 16):
                        alarmHour - 16:
                            this.sendMessageToChannel(bot, 'UTC+16');
                        break;
                }
            }
        }, 60000)
    }

    sendMessageToChannel(bot: any, timezone: string) {
        var message = "", photo = "";
        console.log('ok')

        switch (timezone) {
            case 'UTC':
                message = 'São 4:20 no Porto, Portugal! Faz eçe caralho!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Porto&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+1':
                message = 'Són les 4:20 a Barcelona, Espanya! Blau-la!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Barcelona&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+2':
                message = 'Tas ir 4:20 Rīgā, Latvijā! Iededzini to!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Riga&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+3':
                message = '4:20 مساءً في دبي ، الإمارات العربية المتحدة! الحريق ذلك!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Dubai&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+4':
                message = 'یہ اسلام آباد ، پاکستان میں 4:20 ہے! اسے جلائیں!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Islamabad&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+5':
                message = 'ол Алматыда, 4: 20-да, Қазақстан! Қыздыр!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Almaty&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+6':
                message = 'มันคือ 4:20 ในกรุงเทพประเทศไทย! Blaze It!'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Bangkok&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+7':
                message = '香港时间是4:20！大火吧！'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Hong+Kong&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+8':
                message = '東京、日本は4:20です！燃えろ！'
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Tokyo&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+9':
                message = "It's 4:20 in Brisbane, Australia! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Brisbane&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+10':
                message = "It's 4:20 in Melbourne, Australia! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Melbourne&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+11':
                message = "It's 4:20 in Norfollk Island, Australia! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Norfolk+Island&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+12':
                message = "It's 4:20 in Auckland, New Zealand! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Auckland&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+13':
                message = "It's 4:20 in Kiribati, Kiribati! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Kiribati&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+14':
                message = "It's 4:20 in Adak, Alaska! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Adak&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+15':
                message = "It's 4:20 in Anchorage, Alaska! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Anchorage&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
            case 'UTC+16':
                message = "It's 4:20 in Vancouver, Canada! Blaze it!"
                photo = `http://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`
                break;
        }

        bot.sendMessage( process.env.CHAT_ID, message)

        bot.sendPhoto(process.env.CHAT_ID, photo)
    }

}

/* module.exports = {
    timeNotification: function(bot) {
        setInterval(function() {
            var currentDate = new Date();

            var alarmHour = parseInt(process.env.ALARM_HOUR)

            var hourUTC = currentDate.getUTCHours();

            var minutesUTC = currentDate.getUTCMinutes();

            if (minutesUTC == parseInt(process.env.ALARM_MINUTE)) {
                switch (hourUTC) {
                    case parseInt(process.env.ALARM_HOUR):
                        sendMessageToChannel(bot, 'UTC');
                        break;
                    case alarmHour < 1 ? 24 + (alarmHour - 1) :
                        alarmHour - 1:
                            sendMessageToChannel(bot, 'UTC+1');
                        break;
                    case alarmHour < 2 ? 24 + (alarmHour - 2):
                        alarmHour - 2:
                            sendMessageToChannel(bot, 'UTC+2');
                        break;
                    case alarmHour < 3 ? 24 + (alarmHour - 3):
                        alarmHour - 3:
                            sendMessageToChannel(bot, 'UTC+3');
                        break;
                    case alarmHour < 4 ? 24 + (alarmHour - 4):
                        alarmHour - 4:
                            sendMessageToChannel(bot, 'UTC+4');
                        break;
                    case alarmHour < 5 ? 24 + (alarmHour - 5):
                        alarmHour - 5:
                            sendMessageToChannel(bot, 'UTC+5');
                        break;
                    case alarmHour < 6 ? 24 + (alarmHour - 6):
                        alarmHour - 6:
                            sendMessageToChannel(bot, 'UTC+6');
                        break;
                    case alarmHour < 7 ? 24 + (alarmHour - 7):
                        alarmHour - 7:
                            sendMessageToChannel(bot, 'UTC+7');
                        break;
                    case alarmHour < 8 ? 24 + (alarmHour - 8):
                        alarmHour - 8:
                            sendMessageToChannel(bot, 'UTC+8');
                        break;
                    case alarmHour < 9 ? 24 + (alarmHour - 9):
                        alarmHour - 9:
                            sendMessageToChannel(bot, 'UTC+9');
                        break;
                    case alarmHour < 10 ? 24 + (alarmHour - 10):
                        alarmHour - 10:
                            sendMessageToChannel(bot, 'UTC+10');
                        break;
                    case alarmHour < 11 ? 24 + (alarmHour - 11):
                        alarmHour - 11:
                            sendMessageToChannel(bot, 'UTC+11');
                        break;
                    case alarmHour < 12 ? 24 + (alarmHour - 12):
                        alarmHour - 12:
                            sendMessageToChannel(bot, 'UTC+12');
                        break;
                    case alarmHour < 13 ? 24 + (alarmHour - 13):
                        alarmHour - 13:
                            sendMessageToChannel(bot, 'UTC+13');
                        break;
                    case alarmHour < 14 ? 24 + (alarmHour - 14):
                        alarmHour - 14:
                            sendMessageToChannel(bot, 'UTC+14');
                        break;
                    case alarmHour < 15 ? 24 + (alarmHour - 15):
                        alarmHour - 15:
                            sendMessageToChannel(bot, 'UTC+15');
                        break;
                    case alarmHour < 16 ? 24 + (alarmHour - 16):
                        alarmHour - 16:
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

    bot.sendMessage( process.env.CHAT_ID, message)

} */