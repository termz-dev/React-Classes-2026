import React from 'react'
import { useState } from 'react';



const SubmitForm = () => {

  const [firstname, setFirstname] = useState('');
  console.log(firstname);
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('0');




function handleSubmit(event) {
    event.preventDefault();
    const user = {
      firstname: firstname,
      lastname: lastname,
      age: age
    };
    console.log(user);
}




// const [user, setUser] = useState({
//   firstname: '',
//   lastname: '',
//   age: ''
// });

  return (
    <div>
      <form action="">
        <input type="text" id='Firstname' onChange={(e) => setFirstname(e.target.value)} value = {firstname} placeholder='Enter your first name' />
        <input type="text" id='lastname' onChange={(e) => setLastname(e.target.value)} value = {lastname} placeholder='Enter your last name' />
        <input type="number" onChange={(e) => setAge(e.target.value)} id='age' value = {age} placeholder='Enter your age' />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default SubmitForm
