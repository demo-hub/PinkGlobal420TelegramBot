import TimeNotification from './functions/timeNotification'
require('dotenv').config()
const http = require('http');
const mongoose = require('mongoose')

const TelegramBot = require('node-telegram-bot-api');

import { BotCommand } from './commandAPI'
import * as botConfig from './botConfig'
import * as nicknameCRUD from './MongoDB/CRUD/CustomNicknamesCRUD'

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

    bot.sendMessage(process.env.CHAT_ID, 'Updated to version 4.2.0\nYou can see the changes in https://github.com/demo-hub/PinkGlobal420TelegramBot/blob/master/Changelog.md\n\nIf you have any doubt, contribution or suggestion please feel free to hit me up in Twitter or Telegram @suembra or create an issue in Github https://github.com/demo-hub/PinkGlobal420TelegramBot.\nThank you José Pinto (@JoseAoQuadrado) and Luis Azevedo (https://github.com/LuisAzeved) for your contributions!\nIf you want to help please go on Github and star and/or watch the project or follow me and José Pinto on Twitter @suembra and @JoseAoQuadrado')

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

async function handleMentions(msg: any) {
  var checkBotMention = new RegExp(/(.?)@PinkGlobal420Bot(.?)/);

  const connector = mongoose.connect(botConfig.connectionString, {
    useNewUrlParser: true
  });

  let customNick = await connector.then(async () => {
    return nicknameCRUD.GetUserByID(msg.from.id);
  });

  if (checkBotMention.test(msg.text)) {
    if (customNick == null) {
      if (!msg.from.username) {
        customNick = msg.from.first_name;
      } else {
        customNick = "@" + msg.from.username;
      }
    }

    var mention = `[${customNick}](tg://user?id=${msg.from.id})`;
    bot.sendMessage(msg.chat.id, `Hi ${mention}\nFazeçe irmão`, {
      parse_mode: "MarkdownV2"
    });
    // bot.sendMessage(msg.chat.id, "Fazeçe irmão");
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

