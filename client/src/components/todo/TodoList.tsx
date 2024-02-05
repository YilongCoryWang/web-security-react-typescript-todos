import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"
import TodoItem from "./TodoItem"

export default function TodoList() {
  const todoContext = useContext(TodoContext)
  
  const displayContent = ()=>{
    if('message' in todoContext){
      return <>{todoContext.message}</>
    } else if ('todos' in todoContext){
      return todoContext.todos.map(
        todo => <TodoItem key={todo.id} todo={todo}/>
      )
    }
    return "No todo was found"
  }

  return (
    <ul>
      {
        displayContent()
      }
    </ul>
  )
}
