import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function handlePlus(){
        setCount(count + 1)
    }
    function handleMinus(){
        setCount(count >= 1 ? count - 1 : 'count cannot be negative')
    }
  return (
    <div className=''>
      <h1>{count}</h1>
      <button onClick={handlePlus}>Add Count </button>
      <button onClick={handleMinus}>Remove Count </button>
    </div>
  )
}
export function Form(){
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        age: ""
    })
    function handleSubmit(){
        console.log(user);
        
    }
    return (
        <div>
            <div>
                <label htmlFor="fn">Firstname</label>
                <input type="text" className='border p-2' onChange={(e) => setUser({...user, firstname: e.target.value})} />
            </div>
            <div>
                <label htmlFor="ln">Lastname</label>
                <input type="text" className='border p-2'  onChange={(e) => setUser({...user, lastname: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" className='border p-2'  onChange={(e) => setUser({...user, age: e.target.value})} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Counter
