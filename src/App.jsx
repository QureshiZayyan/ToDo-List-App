import './App.css';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [input, setInputtext] = useState('');

  const change = (e) => {
    setInputtext(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    setText(input);
    setInputtext('');
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>My ToDo List</h2>

        </div>

        <div className="main">
          <form onSubmit={submit}>
            <input type="text" id="name" name="name" className="list" onChange={change} value={input} />
            <button className="btn">Add List</button>
          </form>
        </div>

        <div className="listvalue">
          <p>{text}</p>
        </div>
      </div >
    </>
  )
}

export default App
