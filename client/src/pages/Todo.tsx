import Header from '../components/todo/Header'
import TodoList from '../components/todo/TodoList'
import Footer from '../components/todo/Footer'
import { TodoContextProvider } from '../contexts/TodoContext'

export default function Todo() {
  return (
    <TodoContextProvider>
      <Header />
      <TodoList />
      <Footer />
    </TodoContextProvider>
  )
}
