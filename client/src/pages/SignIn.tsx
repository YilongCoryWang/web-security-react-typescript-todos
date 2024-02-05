import React from 'react'
import axios from 'axios'

type SignInResponseType = {
  "authToken": string
}
type HandleSignInType = {
  handleSignIn: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)
  const resp = await axios.post<SignInResponseType>('https://192.168.56.101:3000/signin', {
    username: data.username,
    password: data.password,
  })
  if((resp.status === 200) && ("authToken" in resp.data)){
    localStorage.setItem("authToken", resp.data.authToken)
  }
}

export default function SignIn({handleSignIn}: HandleSignInType) {
  return (
    <form onSubmit={handleSignIn}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username"></input><br/>
      <label htmlFor="password">Password</label>
      <input id="password" name="password"></input><br/>
      <button type='submit'>Sign In</button>
    </form>
  )
}
