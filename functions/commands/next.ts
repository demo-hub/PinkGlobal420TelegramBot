import { BotCommand } from "../../commandAPI"

require('dotenv').config()

export default class Next implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'next'
    }

    help(): string {
        return ('- /next: Use this command to get the next city to reach the 4:20 mark!')
    }

    isCommand(command: string): boolean {
        return this._command === command;
    }

    async runCommand(args: string[], bot: any, msg: any) {

        var currentDate = new Date();

        var alarmHour = parseInt(process.env.ALARM_HOUR);

        var alarmMinute = parseInt(process.env.ALARM_MINUTE);

        var hourUTC = currentDate.getUTCHours();

        var minutesUTC = currentDate.getUTCMinutes();

        let timeoffset = 0,
            minutesLeft = 0

        if (alarmHour < hourUTC) {
            timeoffset = 24 + alarmHour - hourUTC
        } else if (alarmHour > hourUTC) {
            timeoffset = alarmHour - hourUTC
        }

        if (minutesUTC < alarmMinute) {
            minutesLeft = parseInt(process.env.ALARM_MINUTE) - minutesUTC
        } else {
            minutesLeft = (60 - minutesUTC) + parseInt(process.env.ALARM_MINUTE)
            timeoffset--
        }

        if (timeoffset > 16) {
            minutesLeft = (60 * (timeoffset - 16)) + minutesLeft
        }

        this.nextCity(bot, msg.chat.id, timeoffset, minutesLeft)


    }

    nextCity(bot: any, chatId: string, timeOffset: number, minutesLeft: number) {

        switch (timeOffset) {
            case 0:
                bot.sendMessage(chatId, `As próximas 4:20 são no Porto, Portugal! Faltam ${minutesLeft} minutos`)
                break;
            case 1:
                bot.sendMessage(chatId, `Les properes 4:20 són a Barcelona, Espanya! Resten ${minutesLeft} minuts`)
                break;
            case 2:
                bot.sendMessage(chatId, `Nākamie 4:20 nav pat Rīga, Latvijā! ${minutesLeft} minūtes jāiet`)
                break;
            case 3:
                bot.sendMessage(chatId, `4:20 القادمة في دبي! ${minutesLeft} دقيقة للذهاب`)
                break;
            case 4:
                bot.sendMessage(chatId, `اگلا 4:20 اسلام آباد میں ہے! ${minutesLeft} منٹ جانا ہے`)
                break;
            case 5:
                bot.sendMessage(chatId, `Келесі 4:20 - Алматыда, Қазақстан! ${minutesLeft} минут жүру керек`)
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
                bot.sendMessage(chatId, `The next 4:20 are in Brisbane. Australia! ${minutesLeft} minutes to go`)
                break;
            case 10:
                bot.sendMessage(chatId, `The next 4:20 are in Melbourne, Australia! ${minutesLeft} minutes to go`)
                break;
            case 11:
                bot.sendMessage(chatId, `The next 4:20 are in Norfolk Island, Australia! ${minutesLeft} minutes to go`)
                break;
            case 12:
                bot.sendMessage(chatId, `The next 4:20 are in Auckland, New Zealand! ${minutesLeft} minutes to go`)
                break;
            case 13:
                bot.sendMessage(chatId, `The next 4:20 are in Kiribati, Kiribati! ${minutesLeft} minutes to go`)
                break;
            case 14:
                bot.sendMessage(chatId, `The next 4:20 are in Adak, Alaska! ${minutesLeft} minutes to go`)
                break;
            case 15:
                bot.sendMessage(chatId, `The next 4:20 are in Anchorage, Alaska! ${minutesLeft} minutes to go`)
                break;
            case 16:
                bot.sendMessage(chatId, `The next 4:20 are in Vancouver, Canada! ${minutesLeft} minutes to go`)
                break;
            default:
                bot.sendMessage(chatId, `The next 4:20 are in Vancouver, Canada! ${minutesLeft} minutes to go`)
                break;
        }

    }

}
