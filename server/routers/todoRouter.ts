import express from "express"
import axios from 'axios'

const todoRouter = express.Router()

todoRouter.post("/getTodos", async (req, res)=>{
    const resp = await axios.get('https://dummyjson.com/todos')
    if("data" in resp && "todos" in resp.data){
        res.json({todos: resp.data?.todos})
    }
    res.status(500)
})

export { todoRouter }