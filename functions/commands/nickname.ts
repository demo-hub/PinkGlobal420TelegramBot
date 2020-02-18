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

        const mentionUser =  this.userMentionMethod(msg)

        if (args[0] == 'clear') {

            await nicknameCRUD.DeleteEntry(msg.from.id).then(() => {

                if (mentionUser[1] == null) {
                    bot.sendMessage(process.env.CHAT_ID, `@${mentionUser[0]} your nickname has been cleared`)
                } else {
                    bot.sendMessage(process.env.CHAT_ID, `${mentionUser[0]} your nickname has been cleared`, mentionUser[1])
                }
                
            })

            return
        }

        var newNickname = ''

        args.forEach(arg => {
            newNickname += arg + ' '
        })

        await connector.then(async () => {

            await nicknameCRUD.GetNickname(msg.from.id).then(async (result) => {

                if (result === undefined) {

                    await nicknameCRUD.CreateCustomNickname(msg.from.id, newNickname).then(result => {

                        if (mentionUser[1] == null) {
                            bot.sendMessage(process.env.CHAT_ID, `Alright @${mentionUser[0]} I'll call you ${newNickname} from now on `)
                        } else {
                            bot.sendMessage(process.env.CHAT_ID, `Alright ${mentionUser[0]} I'll call you ${newNickname} from now on `, mentionUser[1])
                        }

                    })

                } else {

                    await nicknameCRUD.UpdateNickname(msg.from.id, newNickname).then(() => {

                        bot.sendMessage(process.env.CHAT_ID, `@${result} your nickname has been update to ${newNickname}`)

                    })
                }

            })
        })

    }

    userMentionMethod(msg) {

        if (msg.from.username === undefined) {

            return [`[${msg.from.first_name}](tg://user?id=${msg.from.id})`, { parse_mode: 'MarkdownV2' }]
        
        } else {
            return [msg.from.username, null]
        }
    }

}