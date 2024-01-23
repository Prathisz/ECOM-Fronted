import React from 'react'
import { useId } from 'react'
const Demo = () => {
    const passwordid=useId();
  return (
    <div>
      <input type='password' aria-describedby={passwordid}></input>
      <p id={passwordid}></p>
    </div>
  )
}

export default Demo
