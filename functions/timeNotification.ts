import { sendMessageToChannel, sendPhotoToChannel } from "./messages";
// import { Message } from 'node-telegram-bot-api'

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

            var cap = { 'caption': '' }

            if (minutesUTC == parseInt(process.env.ALARM_MINUTE)) {
                switch (hourUTC) {
                    case parseInt(process.env.ALARM_HOUR):
                        cap.caption = 'São 4:20 no Porto, Portugal! Faz eçe caralho!\nUTC\nhttps://en.wikipedia.org/wiki/Porto\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Porto&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 1 ? 24 + (alarmHour - 1) :
                        alarmHour - 1:
                        cap.caption = 'Són les 4:20 a Barcelona, Espanya! Blau-la!\nUTC+1\nhttps://en.wikipedia.org/wiki/Barcelona\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Barcelona&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 2 ? 24 + (alarmHour - 2):
                        alarmHour - 2:
                        cap.caption = 'Tas ir 4:20 Rīgā, Latvijā! Iededzini to!\nUTC+2\nhttps://en.wikipedia.org/wiki/Riga\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Riga&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 3 ? 24 + (alarmHour - 3):
                        alarmHour - 3:
                        cap.caption = '4:20 مساءً في دبي ، الإمارات العربية المتحدة! الحريق ذلك!\nUTC+3\nhttps://en.wikipedia.org/wiki/Dubai\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Dubai&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 4 ? 24 + (alarmHour - 4):
                        alarmHour - 4:
                        cap.caption = 'یہ اسلام آباد ، پاکستان میں 4:20 ہے! اسے جلائیں!\nUTC+4\nhttps://en.wikipedia.org/wiki/Islamabad\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Islamabad&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 5 ? 24 + (alarmHour - 5):
                        alarmHour - 5:
                        cap.caption = 'ол Алматыда, 4: 20-да, Қазақстан! Қыздыр!\nUTC+5\nhttps://en.wikipedia.org/wiki/Almaty\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Almaty&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 6 ? 24 + (alarmHour - 6):
                        alarmHour - 6:
                        cap.caption = 'มันคือ 4:20 ในกรุงเทพประเทศไทย! Blaze It!\nUTC+6\nhttps://en.wikipedia.org/wiki/Bangkok\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Bangkok&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 7 ? 24 + (alarmHour - 7):
                        alarmHour - 7:
                        cap.caption = '香港时间是4:20！大火吧！\nUTC+7\nhttps://en.wikipedia.org/wiki/HongKong\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Hong+Kong&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 8 ? 24 + (alarmHour - 8):
                        alarmHour - 8:
                        cap.caption = '東京、日本は4:20です！燃えろ！\nUTC+8\nhttps://en.wikipedia.org/wiki/Tokyo\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado'
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Tokyo&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 9 ? 24 + (alarmHour - 9):
                        alarmHour - 9:
                        cap.caption = "It's 4:20 in Brisbane, Australia! Blaze it!\nUTC+9\nhttps://en.wikipedia.org/wiki/Brisbane\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Brisbane&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 10 ? 24 + (alarmHour - 10):
                        alarmHour - 10:
                        cap.caption = "It's 4:20 in Melbourne, Australia! Blaze it!\nUTC+10\nhttps://en.wikipedia.org/wiki/Melbourne\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Melbourne&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 11 ? 24 + (alarmHour - 11):
                        alarmHour - 11:
                        cap.caption = "It's 4:20 in Norfollk Island, Australia! Blaze it!\nUTC+11\nhttps://en.wikipedia.org/wiki/NorfolkIsland\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Norfolk+Island&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 12 ? 24 + (alarmHour - 12):
                        alarmHour - 12:
                        cap.caption = "It's 4:20 in Auckland, New Zealand! Blaze it!\nUTC+12\nhttps://en.wikipedia.org/wiki/Auckland\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Auckland&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 13 ? 24 + (alarmHour - 13):
                        alarmHour - 13:
                        cap.caption = "It's 4:20 in Kiribati, Kiribati! Blaze it!\nUTC+13\nhttps://en.wikipedia.org/wiki/Kiribati\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Kiribati&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                           cap)
                        break;
                    case alarmHour < 14 ? 24 + (alarmHour - 14):
                        alarmHour - 14:
                        cap.caption = "It's 4:20 in Adak, Alaska! Blaze it!\nUTC+14\nhttps://en.wikipedia.org/wiki/Adak\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Adak&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 15 ? 24 + (alarmHour - 15):
                        alarmHour - 15:
                        cap.caption = "It's 4:20 in Anchorage, Alaska! Blaze it!\nUTC+15\nhttps://en.wikipedia.org/wiki/Anchorage\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Anchorage&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                    case alarmHour < 16 ? 24 + (alarmHour - 16):
                        alarmHour - 16:
                        cap.caption = "It's 4:20 in Vancouver, Canada! Blaze it!\nUTC+15\nhttps://en.wikipedia.org/wiki/Vancouver\nhttps://twitter.com/suembra\nhttps://twitter.com/JoseAoQuadrado"
                        sendPhotoToChannel(bot, `http://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`, process.env.CHAT_ID,
                            cap)
                        break;
                }
            }
        }, 60000)
    }

}