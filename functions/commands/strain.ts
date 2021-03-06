import { BotCommand } from "../../commandAPI";
import * as request from "request-promise-native";

export default class Strain implements BotCommand {

    private readonly _command;

    constructor() {
        this._command = 'strain'
    }

    help(): string {
        return ('- /strain Use this command to see a photo of a random strain');
    }

    isCommand(command: string): boolean {
        return this._command === command
    }

    runCommand(args: string[], bot: any, msg: any): void {
        const axios = require('axios');

        const getRandomStrain = async () => {
          try {
            var randomPage = Math.floor(Math.random() * 900) + 1;
            return await axios.get("https://www.cannabisreports.com/api/v1.0/strains?page=" + randomPage);
          } catch (error) {
            console.error(error);
          }
        }
        
        const botOutput = async () => {
          const strain = await getRandomStrain();
          var randomItem = Math.floor(Math.random() * 9);


          if (strain.data) {
            var outputString = "*Strain Name:* " + strain.data.data[randomItem].name;

            if(strain.data.data[randomItem].image == "http://www.cannabisreports.com/images/strains/no_image.png"){
              var option = {
                "parse_mode": "Markdown",
              };
              
              outputString = "_Sorry, we don't have an image for this strain in our database_\n" + outputString;
              bot.sendMessage(msg.chat.id, outputString, option);
            } else {
              var optionPhoto = {
                "caption": outputString,
                "parse_mode": "Markdown",
              };
              bot.sendPhoto(msg.chat.id, strain.data.data[randomItem].image, optionPhoto);
            }
          }
        }

        botOutput();
    }

}