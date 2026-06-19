import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState("");

  const [todolist, setTodolist] = useState([]);
  function handleTodolist() {
    setTodolist([...todolist, todo]);
    setTodo("");
  }
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your task here"
      />
      <button className="btn" onClick={handleTodolist}>
        Add Todo
      </button>

      <ul>
        {todolist.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export const TodoObject = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([
    { id: 1, task: "cook dinner", completed: false },
    { id: 2, task: "cook lunch", completed: true },
  ]);

  function handleTodolist() {
    setTodolist([
      ...todolist,
      { id: todolist.length + 1, task: todo, completed: false },
    ]);
    setTodo("")
  }
  function handleDeletetask(id) {
    setTodolist(todolist.filter((item) => item.id !== id));

  }
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 pt-8">
        <div className="bg-white p-3 max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold">ToDo App</h1>
            <div className="mt-4 flex">
              <input
              value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-80 border-b-2 border-gray-500 text-black"
                type="text"
                placeholder="Enter your task here"
              />
              <button
                onClick={handleTodolist}
                className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="9" y1="12" x2="15" y2="12" />{" "}
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <ul>
              {todolist.map((item) => {
                return (
                  <li className="p-2 rounded-lg">
                    <div className="flex align-middle flex-row justify-between">
                      <div className="p-2">
                        <input
                          type="checkbox"
                          className="h-6 w-6 "
                          value="true"
                          onChange={() => {
                            setTodolist(todolist.map((todo) => {
                              if (todo.id === item.id) {
                                return { ...todo, completed: !todo.completed };
                              }
                              return todo;
                            }));
                          }}
                          checked={item.completed}
                        />
                      </div>
                      <div className="p-2">
                        <p className={`text-lg text-gray-400 ${item.completed ? "line-through" : "text-black-400"} `}>
                          {item.task}
                        </p>
                      </div>
                      <button 
                      onClick={()=>{handleDeletetask(item.id)}}
                      className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                        <svg
                          className="h-6 w-6 text-red-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <circle cx="12" cy="12" r="10" />{" "}
                          <line x1="15" y1="9" x2="9" y2="15" />{" "}
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                    <hr className="mt-2" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-8">
            <button className="border-2 border-red-500 p-2 text-red-500">
              Clear Completed Task
            </button>
            <button className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">
              Reset Todo List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
