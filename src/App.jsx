import './App.css';
import { useState } from 'react';

const App = () => {

  const [text, setText] = useState('')

  return (
    <>
      <div className="container">

        <div className="heading">
          <h2>My ToDo List</h2>
        </div>

        <div className="main">
          <input type="text" id="name" name="name" className="list" value={text} />
          <button className="btn">Add List</button>
        </div>

        <div className="listvalue">
          <p>{setText(text)}</p>
        </div>
      </div>
    </>
  )
}

export default App
