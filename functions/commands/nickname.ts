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
        return ('- /nickname: Use this command to set a custom nickname that the bot will use when mentioning you!')
    }

    isCommand(command: string): boolean {
        return this._command === command
    }

    async runCommand(args: string[], bot: any, msg: any) {

        const connector = mongoose.connect(botConfig.connectionString, { useNewUrlParser: true })

        var newNickname = ''

        args.forEach(arg => {
            newNickname += arg + ' '
        })

        var bool = (msg.from.username === undefined) ? true : false

        var username = bool ? '' : msg.from.username

        var idMention = ''

        await connector.then(async () => {

            await nicknameCRUD.GetNickname(msg.from.id).then(async (result) => {

                if (result === undefined) {

                    idMention = `[${msg.from.first_name}](tg://user?id=${msg.from.id})`

                    await nicknameCRUD.CreateCustomNickname(msg.from.id, msg.from.first_name, username, newNickname).then(result => {

                        if (bool) {
                            bot.sendMessage(process.env.CHAT_ID, `Alright ${idMention} I'll call you ${newNickname} from now on `, { parse_mode: 'MarkdownV2' })
                        } else {
                            bot.sendMessage(process.env.CHAT_ID, `Alright @${username}!I'll call you ${newNickname} from now on!`)
                        }
                    })

                } else {

                    idMention = idMention = `[${result}](tg://user?id=${msg.from.id})`

                    await nicknameCRUD.UpdateNickname(msg.from.id, newNickname).then(result => {

                        bot.sendMessage(process.env.CHAT_ID, `${idMention} your custom nickname has been updated to ${newNickname}`, { parse_mode: 'MarkdownV2' })

                    })
                }

            })
        })










    }

}