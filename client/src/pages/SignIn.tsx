import React, { useEffect } from 'react'
import useRequest from '../hooks/useRequest'

export type SignInResponseType = {
  "authToken": string
}

export default function SignIn() {
  const {request, data, isLoading, errorStatus} = useRequest()

  useEffect(()=>{
    if(isLoading === false && errorStatus === '' && data){
      localStorage.setItem("authToken", data.authToken)
    }
  }, [isLoading, errorStatus, data])

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    await request('http://localhost:3000/signin', {
      method: 'POST',
      body: {
        username: data.username,
        password: data.password,
      }
    })
  }

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
