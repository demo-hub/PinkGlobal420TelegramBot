import { BotCommand } from "../../commandAPI";
import * as request from "request-promise-native";

export default class Globe implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'globe'
    }

    help(): string {
        return ('- /globe {location} {zoom}: Use this command to have a Google Maps view of a location. The location can be a city, a country or a place. The recomended zoom for cities or contries is 11. For a place we recommend 17.')
    }

    isCommand(command: string): boolean {
        return this._command === command
    }

    runCommand(args: string[], bot: any, msg: any): void {
        if (!args || args.length == 0) {
            bot.sendMessage(msg.chat.id, 'You have to provide a location')
            return
        }

        if (args.length < 2) {
            bot.sendMessage(msg.chat.id, 'You have to provide a location and the zoom')
            return
        }

        if (isNaN(parseInt(args[args.length - 1])) || parseInt(args[args.length - 1]) < 0) {
            bot.sendMessage(msg.chat.id, 'Zoom invalid')
            return;
        }

        let center = ''

        args.forEach((arg, index) => {
            if (index != args.length - 1) {
                center += arg.replace(/ /g, '+')
            }
        });
        //args[1] = args[1].replace(/ /g, '+')

        bot.sendPhoto(msg.chat.id, `http://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${args[args.length - 1]}&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`)
    }

}