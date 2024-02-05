import { Outlet } from 'react-router-dom'

export default function AccountLayout() {
  return (
    <>
        <div>Welcome!</div>
        <Outlet />
        <div>Protect web from XSS and CSRF</div>
    </>
  )
}
