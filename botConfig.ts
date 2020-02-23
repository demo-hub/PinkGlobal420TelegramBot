import Cities from "./functions/commands/cities";
import Next from "./functions/commands/next";
import Ping from "./functions/commands/ping";
import Help from "./functions/commands/help";
import { globalAgent } from "http";
import Globe from "./functions/commands/globe";
import Nickname from "./functions/commands/nickname"
import * as secret from "./secret"
import Strain from "./functions/commands/strain";

export let config = {
    "commands": [
        new Cities(),
        new Next(),
        new Ping(),
        new Help(),
        new Globe(),
        new Nickname(),
        new Strain()
    ]
}

export let connectionString = `mongodb+srv://${secret.credentials.username}:${secret.credentials.password}@5dprojects-imw3j.mongodb.net/test?retryWrites=true&w=majority`