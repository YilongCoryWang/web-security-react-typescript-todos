import { randomBytes } from 'node:crypto'

export const signinHandler = (req, res)=>{
    try{
        const authToken = randomBytes(64).toString('hex');
        console.debug(authToken)
        res.cookie('authToken', authToken, {
            maxAge: 300000,
            httpOnly: true,
            withCredentials: true,
        });
        res.json({'authToken': authToken})
    } catch (e) {
        console.error(e)
    }
}

export const signupHandler = (req, res)=>{
    res.send('signup success')
}

export const signoutHandler = (req, res)=>{
    res.clearCookie('authToken');
    res.send('signout success')
}