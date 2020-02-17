import { BotCommand } from "../../commandAPI";
import * as request from "request-promise-native";
import * as nicknameCRUD from "../../MongoDB/CRUD/CustomNicknamesCRUD"
import * as mongoose from "mongoose"
import * as botConfig from "../../botConfig"

export default class Nickname implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'nickname'
    }

    help(): string {
        return ('- /nickname {nickname}/clear: Use this command to set a custom nickname/clear your custom nickname that the bot will use when mentioning you!')
    }

    isCommand(command: string): boolean {
        return this._command === command
    }

    async runCommand(args: string[], bot: any, msg: any) {

        const connector = mongoose.connect(botConfig.connectionString, { useNewUrlParser: true })

        if (args[0] == 'clear') {

            this.clearCustomNickname(msg,bot)

            return
        }

        var newNickname = ''

        args.forEach(arg => {
            newNickname += arg + ' '
        })

        var username = msg.from.username === undefined ? '' : msg.from.username

        await connector.then(async () => {

            await nicknameCRUD.GetNickname(msg.from.id).then((result) => {

                if (result === undefined) {

                    this.createCustomNicknameEntry(msg, bot, username, newNickname)

                } else {

                    if (result == null) {
                        result = this.userMentionMethod(msg, bot)
                    }

                    this.updateCustomNickname(msg, bot, result, newNickname)
                }

            })
        })

    }

    userMentionMethod(msg, bot) {

        if (msg.from.username === undefined) {
            return `[${msg.from.first_name}](tg://user?id=${msg.from.id})`
        } else {
            return msg.from.username
        }
    }

    async clearCustomNickname(msg: any, bot: any) {

        await nicknameCRUD.UpdateNickname(msg.from.id, null).then(result => {
            if (msg.from.username == undefined) {
                bot.sendMessage(process.env.CHAT_ID, `[${msg.from.first_name}](tg://user?id=${msg.from.id}) Your custom nickname has been cleared`, { parse_mode: 'MarkdownV2' })
            } else {
                bot.sendMessage(process.env.CHAT_ID, `@${msg.from.username} Your custom nickname has been cleared!`)
            }

        })
    }

    async createCustomNicknameEntry(msg: any, bot: any, username: string, newNickname: string) {

        await nicknameCRUD.CreateCustomNickname(msg.from.id, msg.from.first_name, username, newNickname).then(result => {

            if (msg.from.username === undefined) {
                bot.sendMessage(process.env.CHAT_ID, `Alright [${msg.from.first_name}](tg://user?id=${msg.from.id})  I'll call you ${newNickname} from now on `, { parse_mode: 'MarkdownV2' })
            } else {
                bot.sendMessage(process.env.CHAT_ID, `Alright ${msg.from.username} I'll call you ${newNickname} from now on `)
            }

        })
    }

    async updateCustomNickname(msg: any, bot: any, result: string, newNickname: string) {

        await nicknameCRUD.UpdateNickname(msg.from.id, newNickname).then(() => {

            (msg.from.username === undefined) ? bot.sendMessage(process.env.CHAT_ID, `[${result}](tg://user?id=${msg.from.id}) your custom nickname has been updated to ${newNickname}`, { parse_mode: 'MarkdownV2' })
                : bot.sendMessage(process.env.CHAT_ID, `${result} your custom nickname has been updated to ${newNickname}`)

        })
    }

}