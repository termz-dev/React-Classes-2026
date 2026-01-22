
import { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState("");

  const [todolist, setTodolist] = useState([]);

  function handleAddTodo() {
    setTodolist([...todolist, todo]);
    setTodo("");
  }

  return (
    <div>
        <h1>Todo List Component</h1>
        <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder="Add a new task" />
        <button onClick={handleAddTodo}>Add Task</button>


        <ul>    
            {todolist.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
