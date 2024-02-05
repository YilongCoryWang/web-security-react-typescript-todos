import React, { useState } from 'react'

type APropsType = {
  f: (setNum: React.Dispatch<React.SetStateAction<number>>) => void
}

export const f = (setNum: React.Dispatch<React.SetStateAction<number>>)=>{setNum(pre => pre + 1)}

export default function A({f}: APropsType) {
  const [num, setNum] = useState(0)
  return (
    <>
        <div data-testid="num">{num}</div>
        <button onClick={() => f(setNum)}>click</button>
    </>
  )
}
