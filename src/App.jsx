import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [btn, setBtn] = useState('Delete');

  const input = (e) => {
    setText(e.target.value);
  };

  const onbtnclick = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onbtnclick();
    }
  }
  
  return (
    <>
      <main>
        <div className="container">
          <section className="one">
            <div className="heading">
              <h2>My ToDo List</h2>
            </div>

            <div className="Addtask">
              <input
                type="text"
                id="name"
                name="name"
                className="list"
                value={text}
                onChange={input}
                onKeyDown={handleKeyDown}
              />
              <button className="btn" onClick={onbtnclick}>Add List</button>
            </div>
          </section>

          <section className="two">
            <div className="todo-list">
              {tasks.map((task, index) => (
                <div className="list-container">
                  <p key={index}>{task}</p>
                  <button className='btn' key={{ index }} onClick={() => setTasks('')}>{btn}</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main >
    </>
  );
}

export default App;
