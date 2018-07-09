import {GET, Path, PathParam} from 'typescript-rest';

@Path('/test')
export class TestController {

    /**
     * Sends a testing message with the given name
     * @param name The name entered by the user
     */
    @Path(':name')
    @GET
    sayTest(@PathParam('name') name: string): string {
        return `Testing ${name}`;
    }
}
