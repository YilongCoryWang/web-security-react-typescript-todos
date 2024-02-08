import {createContext, useEffect, type PropsWithChildren, useState} from 'react'
import useRequest from '../hooks/useRequest'

export type TodoType = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export type TodoListType = {
  todos: TodoType[]
}

export const TodoContext = createContext({todos: []} as TodoListType);

export const TodoContextProvider = ({children}: PropsWithChildren) => {
  const {request, data, isLoading, errorStatus} = useRequest()
  const [todos, setTodos] = useState<TodoListType>({todos: []})

  useEffect(()=>{
    request('https://dummyjson.com/todos', {method: "GET"})
  }, [])

  useEffect(()=>{
    if(data && 'todos' in data){
      setTodos(data)
    }
  }, [data])

  if(isLoading){
    return <>Loading</>
  }

  if(errorStatus){
    return <>{errorStatus}</>
  }

  return (
    <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
  )
}