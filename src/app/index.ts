import express from "express"

export function createApplication () {
    
    const app = express()

    // middlewares


    //routes
    
    app.get("/", (req, res)=> {
        return res.json({message : `welcome to ChaiCode auth service`})
    })

    return app;
}