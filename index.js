const notification = require('./functions/timeNotification')
const commands = require('./functions/commands')
require('dotenv').config()
const http = require('http');

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running`);

    bot.sendMessage(chat_id = process.env.CHAT_ID, text = 'Updated to version 3.0.0\nAdded:\n- Message on mention\n- /next command to give how much time is left to the next 4:20 or to the next 4:20 in a specific city\nChanged:\n- Refactoring of the code in multiple files\n- Added Riga as a main city in UTC+2\n- Message of UTC+2\n\nIf you have any doubt, contribution or suggestion please feel free to hit me up in Telegram @suembra or create an issue in Github https://github.com/demo-hub/PinkGlobal420TelegramBot')

    notification.timeNotification(bot);

    commands.cities(bot)

    commands.mentions(bot)

    commands.next(bot)

});