import Cities from "./functions/commands/cities";
import Next from "./functions/commands/next";
import Ping from "./functions/commands/ping";
import Help from "./functions/commands/help";
import { globalAgent } from "http";
import Globe from "./functions/commands/globe";

export let config = {
    "commands": [
        new Cities(),
        new Next(),
        new Ping(),
        new Help(),
        new Globe()
    ]
}