import { BotCommand } from "../../commandAPI"

require('dotenv').config()

export default class Ping implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'ping'
    }

    help(): string {
        return ('- /ping: Use this command to test the bot\'\s availability!')
    }

    isCommand(command: string): boolean {
        return this._command === command;
    }

    async runCommand(args: string[], bot: any, msg: any) {
        
        bot.sendMessage(msg.chat.id, "Pong!");

    }

}
