import {createServer} from "node:http"
import { createApplication } from "./app"

async function main() {
    try {
        // when req come createApplication made from express handler will be called 
        const server = createServer(createApplication())
        const PORT: number = 8080 

        server.listen(PORT, () => {
            console.log(`Http server running on PORT ${PORT}`)
        })

    } catch (error) {
        console.log(`error something http server`)
        throw error // print error in console
    }
}

main();