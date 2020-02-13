const notification = require('./functions/timeNotification')
require('dotenv').config()
const http = require('http');

const TelegramBot = require('node-telegram-bot-api');

import { BotCommand } from './commandAPI'
import * as botConfig from './botConfig'

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

let commands: BotCommand[] = [];

loadCommands(`${__dirname}/functions/commands`);

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running`);

    //bot.sendMessage(chat_id = process.env.CHAT_ID, text = 'Updated to version 3.0.0\nAdded:\n- Message on mention\n- /next command to give how much time is left to the next 4:20 or to the next 4:20 in a specific city\nChanged:\n- Refactoring of the code in multiple files\n- Added Riga as a main city in UTC+2\n- Message of UTC+2\n\nIf you have any doubt, contribution or suggestion please feel free to hit me up in Telegram @suembra or create an issue in Github https://github.com/demo-hub/PinkGlobal420TelegramBot')

    notification.timeNotification(bot);

    bot.on("message", (msg) => {

        var checkMention = new RegExp('^@');
        var checkCommand = new RegExp('^/')


        if (checkMention.test(msg.text)) {

            handleMentions(msg);

        } else if (checkCommand.test(msg.text)) {

            handleCommand(msg);

        } else {

            handleUserMessages(msg);
        }

    })

    //commands.mentions(bot)

    //commands.next(bot)

    //commands.ping(bot)

});

function handleMentions(msg: any) {

    var checkBotMention = new RegExp(/(.?)@PinkGlobal420Bot(.?)/);

    if (checkBotMention.test(msg.text)) {
        bot.sendMessage(msg.chat.id, "Fazeçe irmão");
    }
}

function handleUserMessages(msg: any) {

    //This is a temporary solution
    var checkDepression = new RegExp(/(.?)(deprimido|depressão|depressao|deprimir|deprimo)(.?)/);

    if (checkDepression.test(msg.text)) {
        bot.sendMessage(msg.chat.id, "Eu tenho a solução para a tua depressão. Deposita o teu salário na minha congragação.");
    }

}

async function handleCommand(msg: any) {

    let command = msg.text.split(" ")[0].replace('/', "");
    let args = msg.text.split(" ").slice(1);

    for (const commandType of commands) {

        try {
            if (!commandType.isCommand(command)) {
                continue;
            }

            await commandType.runCommand(args, bot, msg);

        } catch (exception) {

            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //If command list doesn't exist or is empty
    if (!botConfig.config.commands || (botConfig.config.commands as string[]).length === 0) { return; }

    for (const commandName of botConfig.config.commands as string[]) {

        const commandType = require(`${commandsPath}/${commandName}`).default;

        const command = new commandType() as BotCommand;

        commands.push(command);
    }
}

