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
        bot.onText(/@PinkGlobal420Bot(.?)/, (msg, match) => {
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

            if (timeoffset == 0) {
                if (minutesUTC < process.env.ALARM_MINUTE) {
                    minutesLeft = process.env.ALARM_MINUTE - minutesUTC
                } else {
                    minutesLeft = (60 - minutesUTC) + process.env.ALARM_MINUTE
                    timeoffset++
                }
            }

            nextCity(bot, timeoffset, minutesLeft)
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

function nextCity(bot, timeoffset, minutesLeft) {
    switch (timeoffset) {
        case 0:
            bot.sendMessage(`As próximas 4:20 são no Porto! Faltam ${minutesLeft} minutos`)
        case 1:
            bot.sendMessage(`Les properes 4:20 són a Barcelona! Resten ${minutesLeft} minuts`)
            break;
    }
}