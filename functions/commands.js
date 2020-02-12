require('dotenv').config()

module.exports = {
    cities: function(bot) {
        bot.onText(/\/cities(.?)/, (msg, match) => {
            const timezone = match.input.replace('/cities', '').trim()
            if (timezone) {
                mainCities(bot, msg.chat.id, timezone)
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
                    mainCities(bot, callbackQuery.message.chat.id, callbackQuery.data)
                })
            }
        })
    },

    mentions: function(bot) {
        bot.onText(/(.?)@PinkGlobal420Bot(.?)/, (msg, match) => {
            bot.sendMessage(msg.chat.id, "Fazeçe irmão");
        })
    },

    next: function(bot) {
        bot.onText(/\/next/, (msg, match) => {
            var currentDate = new Date();

            var hourUTC = currentDate.getUTCHours();

            var minutesUTC = currentDate.getUTCMinutes();

            let timeoffset = 0,
                minutesLeft = 0

            if (process.env.ALARM_HOUR < hourUTC) {
                timeoffset = 24 - (hourUTC - process.env.ALARM_HOUR)
            } else if (process.env.ALARM_HOUR > hourUTC) {
                timeoffset = hourUTC - process.env.ALARM_HOUR
            }

            if (minutesUTC < process.env.ALARM_MINUTE) {
                minutesLeft = parseInt(process.env.ALARM_MINUTE) - minutesUTC
            } else {
                minutesLeft = (60 - minutesUTC) + parseInt(process.env.ALARM_MINUTE)
                timeoffset++
            }

            if (timeoffset > 16) {
                minutesLeft = 60 * (24 - timeoffset) - minutesLeft + parseInt(process.env.ALARM_MINUTE)
            }

            nextCity(bot, msg.chat.id, timeoffset, minutesLeft)
        })
    }
}

function mainCities(bot, chatId, timezone) {
    switch (timezone) {
        case 'UTC':
            bot.sendMessage(chatId, 'Main cities: London, Dublin, Lisbon, Abidjan, Accra, Dakar')
            break;
        case 'UTC+1':
            bot.sendMessage(chatId, 'Main cities: Berlin, Rome, Paris, Madrid, Warsaw, Lagos, Kinshasa, Algiers, Casablanca')
            break;
        case 'UTC+2':
            bot.sendMessage(chatId, 'Main cities: RIGA, Cairo, Johannesburg, Khartoum, Kiev, Bucharest, Athens, Jerusalem')
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

function nextCity(bot, chatId, timeoffset, minutesLeft) {
    switch (timeoffset) {
        case 0:
            bot.sendMessage(chatId, `As próximas 4:20 são no Porto! Faltam ${minutesLeft} minutos`)
            break;
        case 1:
            bot.sendMessage(chatId, `Les properes 4:20 són a Barcelona! Resten ${minutesLeft} minuts`)
            break;
        case 2:
            bot.sendMessage(chatId, `Nākamie 4:20 nav pat Rīga! ${minutesLeft} minūtes jāiet`)
            break;
        case 3:
            bot.sendMessage(chatId, `4:20 القادمة في دبي! ${minutesLeft} دقيقة للذهاب`)
            break;
        case 4:
            bot.sendMessage(chatId, `اگلا 4:20 اسلام آباد میں ہے! ${minutesLeft} منٹ جانا ہے`)
            break;
        case 5:
            bot.sendMessage(chatId, `Келесі 4:20 - Алматыда! ${minutesLeft} минут жүру керек`)
            break;
        case 6:
            bot.sendMessage(chatId, `4:20 ถัดไปอยู่ในกรุงเทพ! ไป ${minutesLeft} นาที`)
            break;
        case 7:
            bot.sendMessage(chatId, `接下来的4:20在香港！ ${minutesLeft}分钟`)
            break;
        case 8:
            bot.sendMessage(chatId, `次の4:20は東京にあります！あと${minutesLeft}分`)
            break;
        case 9:
            bot.sendMessage(chatId, `The next 4:20 are in Brisbane! ${minutesLeft} minutes to go`)
            break;
        case 10:
            bot.sendMessage(chatId, `The next 4:20 are in Melbourne! ${minutesLeft} minutes to go`)
            break;
        case 11:
            bot.sendMessage(chatId, `The next 4:20 are in Norfolk Island! ${minutesLeft} minutes to go`)
            break;
        case 12:
            bot.sendMessage(chatId, `The next 4:20 are in Auckland! ${minutesLeft} minutes to go`)
            break;
        case 13:
            bot.sendMessage(chatId, `The next 4:20 are in Kiribati! ${minutesLeft} minutes to go`)
            break;
        case 14:
            bot.sendMessage(chatId, `The next 4:20 are in Adak! ${minutesLeft} minutes to go`)
            break;
        case 15:
            bot.sendMessage(chatId, `The next 4:20 are in Anchorage! ${minutesLeft} minutes to go`)
            break;
        case 16:
            bot.sendMessage(chatId, `The next 4:20 are in Vancouver! ${minutesLeft} minutes to go`)
            break;
        default:
            bot.sendMessage(chatId, `The next 4:20 are in Vancouver! ${minutesLeft} minutes to go`)
            break;
    }
}