import express from 'express'
import { authRouter } from './authRouter'
import { todoRouter } from './todoRouter'
import checkAuth from "./middlewares/checkAuth"

const rootRouter = express.Router()
rootRouter.use('/', authRouter)
rootRouter.use('/', checkAuth, todoRouter)

export default rootRouter