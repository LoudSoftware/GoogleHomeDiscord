import { GET, Path } from 'typescript-rest';
import { discordBot } from "../index";
import { GuildMember, Guild } from 'discord.js';

@Path('/discord/voice/')
export class DiscordController {

    /**
     * Joins the voice channel in which loud is in
     */
    @GET
    @Path('/join')
    async joinVoiceChannel() {
        // let's go grab LoudSoftware
        let loud: GuildMember;
        let guild: Guild;
        guild = discordBot.client.guilds.find("name", "BotTesting");
        // console.log(guild);
        loud = guild.members.get('147410761021390850');
        // console.log(loud);

        if (loud.voiceChannel) {
            let voiceChannel = loud.voiceChannel;
            await voiceChannel.join();
            return `Joined ${voiceChannel.name} channel.`;
        }
    }

    /**
     * Leaves the voice channel
     */
    @GET
    @Path('/leave')
    async leaveVoiceChannel() {
        discordBot.client.voiceConnections.forEach(conn => conn.disconnect());

        return `Disconnected from voice channel`;
    }
}