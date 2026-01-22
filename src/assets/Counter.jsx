import React, {useState} from 'react'



const Counter = () => {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    if (count > 30) {
        setCount(30);
        alert("e don do you nah")
    }
  }

  function decrement() {
    setCount(count - 1);
    count < 0 ? setCount(0) : setCount(count - 1)
    alert("e don do you nah, you no fit enter negative number ogah");
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
