import { TelegramBot } from 'node-telegram-bot-api'

export interface BotCommand {

    help(): string;
    isCommand(command: string): boolean;
    runCommand(args: string[], bot: any, msg: any): void;
}