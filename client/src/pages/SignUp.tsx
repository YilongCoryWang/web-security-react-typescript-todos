export default function SignUp() {

  return (
    <form onSubmit={()=>{}}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username"></input><br/>
      <label htmlFor="password">Password</label>
      <input id="password" name="password"></input><br/>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
