import express from "express"
import checkAuth from "./middlewares/checkAuth"
import { signinHandler, signupHandler, signoutHandler } from "./handlers/authRouterHandlers"

const authRouter = express.Router()

authRouter.post("/signup", signupHandler)
authRouter.post("/signin", signinHandler)
authRouter.post("/signout", checkAuth, signoutHandler)

export { authRouter }