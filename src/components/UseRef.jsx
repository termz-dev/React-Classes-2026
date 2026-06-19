import React, { useRef } from 'react'

const UseRef = () => {
    const inpref = useRef(null)
    function handleInpRef(){
        console.log(inpref.current.value)
        inpref.current.value = ""
    }
  return (
    <div>
      <input type="text" ref={inpref} />
      <button onClick={handleInpRef}>click me</button>
    </div>
  )
}

export default UseRef
