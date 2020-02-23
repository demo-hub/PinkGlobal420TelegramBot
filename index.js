"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var timeNotification_1 = require("./functions/timeNotification");
require('dotenv').config();
var http = require('http');
var TelegramBot = require('node-telegram-bot-api');
var botConfig = require("./botConfig");
var token = process.env.TOKEN;
var bot = new TelegramBot(token, { polling: true });
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
var commands = [];
loadCommands(__dirname + "/functions/commands");
server.listen(process.env.PORT || 5000, function () {
    console.log("Server running");
    //bot.sendMessage(process.env.CHAT_ID, 'Updated to version 4.1.5\nFixed:\n - Notification on 4:20\n- /next command\n\nIf you have any doubt, contribution or suggestion please feel free to hit me up in Telegram @suembra or create an issue in Github https://github.com/demo-hub/PinkGlobal420TelegramBot\nThank you kaidey for your contributions! You can find him in https://github.com/Kaidey\nIf you want to help please go on Github and star and/or watch the project. Maybe we can appear on Trending!\n\nBrace yourselves the next version is gonna be the version 4.2.0! Big things are coming!')
    //bot.sendMessage(process.env.CHAT_ID, 'Welcome to *insert group chat name se possivel*. Use /help to see all the commands (and functions?) I have to offer. Blaze it!')
    new timeNotification_1.default().timeNotification(bot);
    bot.on("message", function (msg) {
        var checkMention = new RegExp('^@');
        var checkCommand = new RegExp('^/');
        if (checkMention.test(msg.text)) {
            handleMentions(msg);
        }
        else if (checkCommand.test(msg.text)) {
            handleCommand(msg);
        }
        else {
            handleUserMessages(msg);
        }
    });
    //commands.mentions(bot)
    //commands.next(bot)
    //commands.ping(bot)
});
function handleMentions(msg) {
    var checkBotMention = new RegExp(/(.?)@PinkGlobal420Bot(.?)/);
    if (checkBotMention.test(msg.text)) {
        bot.sendMessage(msg.chat.id, "Fazeçe irmão");
    }
}
function handleUserMessages(msg) {
    //This is a temporary solution
    var checkDepression = new RegExp(/(.?)(deprimido|depressão|depressao|deprimir|deprimo)(.?)/);
    if (checkDepression.test(msg.text)) {
        bot.sendMessage(msg.chat.id, "Eu tenho a solução para a tua depressão. Deposita o teu salário na minha congragação.");
    }
}
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function () {
        var command, args, _i, commands_1, commandType, exception_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    command = msg.text.split(" ")[0].replace('/', "");
                    args = msg.text.split(" ").slice(1);
                    _i = 0, commands_1 = commands;
                    _a.label = 1;
                case 1:
                    if (!(_i < commands_1.length)) return [3 /*break*/, 6];
                    commandType = commands_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    if (!commandType.isCommand(command)) {
                        return [3 /*break*/, 5];
                    }
                    return [4 /*yield*/, commandType.runCommand(args, bot, msg)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    exception_1 = _a.sent();
                    console.log(exception_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function loadCommands(commandsPath) {
    //If command list doesn't exist or is empty
    if (!botConfig.config.commands || botConfig.config.commands.length === 0) {
        return;
    }
    for (var _i = 0, _a = botConfig.config.commands; _i < _a.length; _i++) {
        var command = _a[_i];
        commands.push(command);
    }
}
//# sourceMappingURL=index.js.map