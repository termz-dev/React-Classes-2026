import React from 'react'

function Dosomething(){
     alert('Hii SQI students')
}
function handleInputChange(e){
    const valueof = e.target.value;
    console.log(valueof);
    
}
const todoList = [
    {id:1, task:"Learn React", completed:false},
    {id:2, task:"Build a Todo App", completed:true},
    {id:3, task:"Master Javascript", completed:false}
];
const Day3 = () => {
  return (
    <div>
      <button className='' onClick={alert('hiiiii')}>click me</button>
      <input className='border py-2 px-4' type="text" onChange={handleInputChange} />
      <ul>
        {todoList.map((todo,index) => (
            <>
           <li className='text-xl text-white inline ' key={index} >{todo.id} {todo.task} </li>
             <span className='text-xl text-white px-4'>{`${todo.completed ? 'Not complete' : 'Completed' }`}</span> <br />
            </>
        ))}
      </ul>
    </div>
  )
}

export default Day3
