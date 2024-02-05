import express from 'express';
import rootRouters from './routers'
import cookieparser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(cookieparser())
app.use(cors({
    // origin: ["http://localhost:5173"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(rootRouters)

app.listen(port, () => {
  return console.log(`Auth server is listening at http://localhost:${port}`);
});