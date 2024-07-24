import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const input = (e) => {
    setText(e.target.value);
  };

  const btn = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      btn();
    }
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>My ToDo List</h2>
        </div>

        <div className="main">
          <input
            type="text"
            id="name"
            name="name"
            className="list"
            value={text}
            onChange={input}
            onKeyDown={handleKeyDown}
          />
          <button className="btn" onClick={btn}>Add List</button>
        </div>

        <div className="listvalue">
          <div className="lists">
            {tasks.map((task, index) => (
              <p key={index}>{task}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
