import axios, { AxiosError } from 'axios'
import {createContext, useEffect, type PropsWithChildren, useState} from 'react'

export type TodoType = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export type TodoListType = {
  todos: TodoType[]
}

export type GetTodoErrorType = {
  message: string
}

type TodoContextType = TodoListType | GetTodoErrorType

export const TodoContext = createContext({todos: []} as TodoContextType);

export const TodoContextProvider = ({children}: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoContextType>({todos: []})
  const [error, setError] = useState<GetTodoErrorType>({message: ''})

  useEffect(() => {
    async function getTodos() {
      try{
        const authToken = localStorage.getItem("authToken")
        if(authToken){
          const resp = await axios.get('https://dummyjson.com/todos')
          // const resp = await axios.post<TodoListType>('https://192.168.56.101:3000/getTodos', {
          //   authToken
          // })
          if("todos" in resp){
            setTodos({todos: resp.todos as TodoType[]})
          }
        }
      } catch(error) {
        if(error instanceof AxiosError || error instanceof Error){
          setError({message: error.message})
        }
      }
    }
    getTodos()
  }, [])

  return (
    <TodoContext.Provider value={error.message !== '' ? error : todos}>{children}</TodoContext.Provider>
  )
}