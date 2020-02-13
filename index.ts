import TimeNotification from './functions/timeNotification'
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

    bot.sendMessage(process.env.CHAT_ID, 'Updated to version 4.0.0\nAdded:\n- Command to test bot availability /ping to which it replies with Pong! (kaidey)\n- Message on the use of the keyword depressao (kaidey)\n- /help command to give a list of all the commands available\n- /globe command to give a Google Maps view of a city\nChanged:\n- Refactoring of all the code to use Typescript (kaidey)\n- The 4:20 notification has an image of the city\n- The 4:20 notification now has the country of the city\n\nIf you have any doubt, contribution or suggestion please feel free to hit me up in Telegram @suembra or create an issue in Github https://github.com/demo-hub/PinkGlobal420TelegramBot\nThank you kaidey for your contributions to this version! You can find him in https://github.com/Kaidey\nIf you want to help please go on Github and star and/or watch the project. Maybe we can appear on Trending!')

    new TimeNotification().timeNotification(bot);

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
    if (!botConfig.config.commands || (botConfig.config.commands as BotCommand[]).length === 0) { return; }

    for (const command of botConfig.config.commands as BotCommand[]) {

        commands.push(command);
    }
}

