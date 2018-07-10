import {GET, Path, PathParam} from 'typescript-rest';
import { discordBot } from "../index";

@Path('/test')
export class TestController {

    /**
     * Sends a testing message with the given name
     * @param name The name entered by the user
     */
    @Path(':name')
    @GET
    async sayTest(@PathParam('name') name: string): Promise<string> {
        await discordBot.client.user.setActivity(`got request: ${name}`);
        console.log(`API got a GET with: ${name}`);
        return `Testing ${name}`;
    }
}
