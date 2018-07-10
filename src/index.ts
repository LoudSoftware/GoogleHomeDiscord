'use strict';

import { start } from './start';
import { DiscordBot } from './discord-bot';

start()
    .catch((err) => {
        console.error(`Error starting server: ${err.message}`);
        process.exit(-1);
    });


export const discordBot = new DiscordBot();

