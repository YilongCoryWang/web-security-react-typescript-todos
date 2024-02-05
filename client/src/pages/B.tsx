import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function B() {
  const [num, setNum] = useState(0)

  const f = ()=>{setNum(pre => pre + 1)}

  return (
    <>
        <div data-testid="num">{num}</div>
        <button onClick={f}>click</button>
        <Link to="/A"><button>change route</button></Link>
    </>
  )
}
