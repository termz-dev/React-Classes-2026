import React, { useRef } from "react";

const Reflearn = () => {

    const inpRef = useRef(null)
    const hiRef = useRef(null)

    function handleClick() {
        inpRef.current.style.border = "2px solid red"
        hiRef.current.innerText = "Hello world"
    }
  return (
    <div>
      <h1 ref={hiRef}>This is h1</h1>
      <input type="text" name="" ref={inpRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Reflearn
