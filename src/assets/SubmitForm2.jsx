import React from 'react'
import { useState } from 'react';

const SubmitForm2 = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        age: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

  return (
    <div>
      <form action="">
        <input type="text" id='Firstname' onChange={ (e) => setUser({...user, firstName: e.target.value})} value={user.firstName} placeholder='Enter your first name' />
        <input type="text" id='lastname' onChange={ (e) => setUser({...user, lastName: e.target.value})} placeholder='Enter your last name' />
        <input type="number" id='age' onChange={ (e) => setUser({...user, age: e.target.value})} placeholder='Enter your age' />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitForm2
