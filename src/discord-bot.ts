import * as dotenv from 'dotenv';

dotenv.config();
import * as path from 'path';

import { CommandoClient, CommandMessage } from "discord.js-commando";
import { Channel } from 'discord.js';



export class DiscordBot {

    musicTextChannelID = '330535137479491594';
    musicTextChannel: Channel;
    public client: CommandoClient;

    constructor() {
        this.client = new CommandoClient({
            owner: '147410761021390850',
            commandPrefix: '.'
        });

        const token = process.env.BOT_TOKEN;

        this.client.on('ready', async () => {
            console.log('bot ready');
            this.musicTextChannel = this.client.channels.get(this.musicTextChannelID);
            await this.client.user.setActivity('to some test music', { type: 'LISTENING' });
        });

        this.client.registry
            .registerDefaults()
            .registerCommandsIn(path.join(__dirname, 'commands'));

        this.client.dispatcher.addInhibitor((message: CommandMessage) => {
            if (message.channel.id !== this.musicTextChannelID) return 'Only in music channel';
        });
        
        this.client.on('commandBlocked', (message:CommandMessage, reason:string) => message.reply(`Command blocked because: ${reason}.`));

        this.client.login(token);
    }


}

