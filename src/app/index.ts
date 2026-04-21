import express from "express"
import { authRouter } from "./auth/routes"
import { authenticationMiddleware } from "./middleware/auth-middleware"

export function createApplication () {
    
    const app = express()

    // middlewares
    app.use(express.json())
    app.use(authenticationMiddleware())


    //routes
    
    app.get("/", (req, res)=> {
        return res.json({message : `welcome to ChaiCode auth service`})
    })

    app.use("/auth", authRouter)

    return app;
}