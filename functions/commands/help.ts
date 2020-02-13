import { BotCommand } from "../../commandAPI";
import * as botConfig from '../../botConfig';

export default class Help implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'help'
    }

    help(): string {
        throw new Error("Method not implemented.");
    }

    isCommand(command: string): boolean {
        return this._command === command;
    }

    runCommand(args: string[], bot: any, msg: any): void {
        let message = 'Commands:\n'
        botConfig.config.commands.forEach(command => {
            if (command != this) {
                message += `${command.help()}\n`
            }
        });

        bot.sendMessage(msg.chat.id, message)
    }

}