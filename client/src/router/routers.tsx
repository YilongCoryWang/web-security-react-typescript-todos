import TodoLayout from '../layouts/TodoLayout'
import AccountLayout from '../layouts/AccountLayout'
import Todo from '../pages/Todo'
import SignIn, {handleSignIn} from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const routers = [{
    path: '/',
    element: <TodoLayout />,
    children: [{
        index: true,
        element: <Todo />,
    },]
}, {
    path: '/auth',
    element: <AccountLayout />,
    children: [{
        path: '/auth/signin',
        element: <SignIn handleSignIn={handleSignIn} />,
    }, {
        path: '/auth/signup',
        element: <SignUp />,
    }]
}]

export default routers