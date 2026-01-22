
import { useState } from 'react'

const TodoList2 = () => {
    const [todo, setTodo] = useState({
    });

    console.log(todo);

  const [todolist, setTodolist] = useState([
    { id: 1, item: 'Learn React', confirmed: false },
    { id: 2, item: 'Learn JavaScript', confirmed: true }
  ]);

  function handleAddTodo() {
    setTodolist([...todolist,
        { id: todolist.length + 1, item: todo.item, confirmed: false }
        ]);
    
  }

  function handleRemoveTodo(id) {
  setTodolist(todolist.filter(todo => todo.id !== id));
}


  return (
    <div>
        <h1>Todo List Component</h1>
        <input className='border border-red-500 rounded' type="text" onChange={ (e) => setTodo({...todo, item: e.target.value})}  />
        <button className='border border-red-500 rounded' onClick={handleAddTodo}>Add Task</button>


        <ul>    
            {todolist.map((item, index) => (
                <li key={index} className='bg-slate-300 m-2 p-2'>
                   <input type="checkbox" onChange={() => setTodolist(todolist.map((todo) => {
                      if (todo.id === item.id) {
                        return { ...todo, confirmed: !todo.confirmed };
                      }
                      return todo;
                    }))} /> <p className={`text-lg text-gray-400 ${item.confirmed ? 'line-through' : ''}`}>{item.item}</p> - {item.confirmed ? 'Done' : 'Pending'}
                    <button
    className="ml-3 bg-red-500 text-white px-2 py-1 rounded"
    onClick={() => handleRemoveTodo(item.id)}
  >
    Remove
  </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList2
