import express from "express";
import type { Router } from "express";
import AuthenticationController from "./controller";
import { restrictToAuthenticationUser } from "../middleware/auth-middleware";

const authenticationController = new AuthenticationController()



export const authRouter: Router = express.Router()

authRouter.post('/sign-up',  authenticationController.handleSignup.bind(authenticationController))
authRouter.post('/sign-in', authenticationController.handleSignIn.bind(authenticationController))
authRouter.get('/me',restrictToAuthenticationUser(), authenticationController.handleMe.bind(authenticationController))

