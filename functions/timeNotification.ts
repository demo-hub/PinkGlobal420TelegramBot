import { sendMessageToChannel, sendPhotoToChannel } from "./messages";

require('dotenv').config()

export default class TimeNotification {

    constructor() { }

    timeNotification(bot: any) {
        //this.sendMessageToChannel(bot, 'UTC');
        setInterval(function() {
            var currentDate = new Date();

            var alarmHour = parseInt(process.env.ALARM_HOUR)

            var hourUTC = currentDate.getUTCHours();

            var minutesUTC = currentDate.getUTCMinutes();

            if (minutesUTC == parseInt(process.env.ALARM_MINUTE)) {
                switch (hourUTC) {
                    case parseInt(process.env.ALARM_HOUR):
                        sendMessageToChannel(bot, 'São 4:20 no Porto, Portugal! Faz eçe caralho!', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Porto&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 1 ? 24 + (alarmHour - 1) :
                        alarmHour - 1:
                        sendMessageToChannel(bot, 'Són les 4:20 a Barcelona, Espanya! Blau-la!', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Barcelona&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 2 ? 24 + (alarmHour - 2):
                        alarmHour - 2:
                        sendMessageToChannel(bot, 'Tas ir 4:20 Rīgā, Latvijā! Iededzini to!', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Riga&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 3 ? 24 + (alarmHour - 3):
                        alarmHour - 3:
                        sendMessageToChannel(bot, '4:20 مساءً في دبي ، الإمارات العربية المتحدة! الحريق ذلك!', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Dubai&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 4 ? 24 + (alarmHour - 4):
                        alarmHour - 4:
                        sendMessageToChannel(bot, 'یہ اسلام آباد ، پاکستان میں 4:20 ہے! اسے جلائیں!', process.env.CHAT_ID);
                        break;
                    case alarmHour < 5 ? 24 + (alarmHour - 5):
                        alarmHour - 5:
                        sendMessageToChannel(bot, 'ол Алматыда, 4: 20-да, Қазақстан! Қыздыр!', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Almaty&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 6 ? 24 + (alarmHour - 6):
                        alarmHour - 6:
                        sendMessageToChannel(bot, 'มันคือ 4:20 ในกรุงเทพประเทศไทย! Blaze It!', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Bangkok&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 7 ? 24 + (alarmHour - 7):
                        alarmHour - 7:
                        sendMessageToChannel(bot, '香港时间是4:20！大火吧！', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Hong+Kong&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 8 ? 24 + (alarmHour - 8):
                        alarmHour - 8:
                        sendMessageToChannel(bot, '東京、日本は4:20です！燃えろ！', process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Tokyo&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 9 ? 24 + (alarmHour - 9):
                        alarmHour - 9:
                        sendMessageToChannel(bot, "It's 4:20 in Brisbane, Australia! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Brisbane&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 10 ? 24 + (alarmHour - 10):
                        alarmHour - 10:
                        sendMessageToChannel(bot, "It's 4:20 in Melbourne, Australia! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Melbourne&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 11 ? 24 + (alarmHour - 11):
                        alarmHour - 11:
                        sendMessageToChannel(bot, "It's 4:20 in Norfollk Island, Australia! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Norfolk+Island&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 12 ? 24 + (alarmHour - 12):
                        alarmHour - 12:
                        sendMessageToChannel(bot, "It's 4:20 in Auckland, New Zealand! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Auckland&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 13 ? 24 + (alarmHour - 13):
                        alarmHour - 13:
                        sendMessageToChannel(bot, "It's 4:20 in Kiribati, Kiribati! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Kiribati&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 14 ? 24 + (alarmHour - 14):
                        alarmHour - 14:
                        sendMessageToChannel(bot, "It's 4:20 in Adak, Alaska! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Adak&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 15 ? 24 + (alarmHour - 15):
                        alarmHour - 15:
                        sendMessageToChannel(bot, "It's 4:20 in Anchorage, Alaska! Blaze it!", process.env.CHAT_ID);
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Anchorage&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                    case alarmHour < 16 ? 24 + (alarmHour - 16):
                        alarmHour - 16:
                            sendMessageToChannel(bot, "It's 4:20 in Vancouver, Canada! Blaze it!", process.env.CHAT_ID);
                            sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID)
                        break;
                }
            }
        }, 60000)
    }

    /* sendMessageToChannel(bot: any, timezone: string) {
        var message = "", photo = "";

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

        bot.sendMessage(process.env.CHAT_ID, message)

        bot.sendPhoto(process.env.CHAT_ID, photo)
    } */

}