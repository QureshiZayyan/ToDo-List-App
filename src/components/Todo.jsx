import React from 'react'
import { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { ImInsertTemplate } from 'react-icons/im';

const Todo = () => {
  const [input, setInput] = useState('');
  const [todolist, setTodoList] = useState([]);

  // const submit = (e) => {
  //   e.preventDefault();
  //   if (!input) return;
  //   setTodoList([...todolist, input]);
  //   localStorage.setItem(input);
  //   setInput('');
  // }

  const submit = (e) => {
    e.preventDefault();
    if (!input) return alert('add list');

    const updatedTodoList = [...todolist, input];
    setTodoList(updatedTodoList);

    localStorage.setItem('todos', JSON.stringify(updatedTodoList));
    setInput('');
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodoList(savedTodos);
  }, []);

  const handleDelete = (index) => {
    setTodoList(todolist.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="heading">
        </div>
        <div className="main my-11">
          <form onSubmit={submit}>
            <input type="text" id="name" name="name" className="list w-[35vw] p-1 rounded-md focus:outline-none" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="btn bg-blue-500 mx-2 p-1 rounded-md font-semibold">Add List</button>
          </form>
        </div>

        <div className="listvalue">
          <ul className='flex iteme-center flex-col'>
            {
              todolist.map((item, index) => (
                <li className="flex items-center justify-between bg-slate-50 my-2 w-96 max-h-20 overflow-y-scroll overflow-hidden rounded-md p-1" key={index}>
                  {item}
                  <MdDelete className="cursor-pointer" size={30} onClick={() => handleDelete(index)} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todo;