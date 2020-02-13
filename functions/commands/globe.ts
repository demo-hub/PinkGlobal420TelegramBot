import { BotCommand } from "../../commandAPI";
import * as request from "request-promise-native";

export default class Globe implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'globe'
    }

    help(): string {
        return ('- /globe {location}: Use this command to have a Google Maps view of a location. The location can be a city or a country')
    }

    isCommand(command: string): boolean {
        return this._command === command
    }

    runCommand(args: string[], bot: any, msg: any): void {
        if (!args || args.length == 0) {
            bot.sendMessage(msg.chat.id, 'You have to provide a location')
            return
        }

        bot.sendPhoto(msg.chat.id, `http://maps.googleapis.com/maps/api/staticmap?center=${args[0]}&zoom=11&size=600x300&maptype=roadmap&key=${process.env.MAPS_API_KEY}`)
    }

}