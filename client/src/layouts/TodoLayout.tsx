import { Outlet } from 'react-router-dom'

export default function TodoLayout() {
  return (
    <>
        <nav>nav</nav>
        <Outlet />
        <footer>footer</footer>
    </>
  )
}
