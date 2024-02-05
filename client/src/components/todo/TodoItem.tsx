import { TodoType } from '../../contexts/TodoContext'

export default function TodoItem({todo}: {todo: TodoType}) {
  return (
    <li>{todo.id} - {todo.todo} - {todo.userId} - {todo.completed.toString()}</li>
  )
}
