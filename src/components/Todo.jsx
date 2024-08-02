import React from 'react'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todolist, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodo(input);
    setTodoList([...todolist, todo])
    setInput('');
  }

  return (
    <>
      <MdDelete className='icons' size={40} />
      <FaCheckCircle className='icons' size={40} />
      <div className="container">
        <div className="heading">
          <h2>My ToDo List</h2>
        </div>
        <div className="main">
          <form onSubmit={submit}>
            <input type="text" id="name" name="name" className="list" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="btn">Add List</button>
          </form>
        </div>

        <div className="listvalue">
          <ul>
            {todolist.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div >
    </>
  )
}

export default Todo;