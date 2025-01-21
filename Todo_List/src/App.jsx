import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [data, setdata] = useState([]);
  const [input, setinput] =  useState("");
  const handleSubmit = () => {
    setdata((data) => data.concat({text: input, id: Math.floor(Math.random() * 10)}));
    setinput("");
  }
  const removeTodo = (id) => {
    setdata((data) => data.filter((d) => d.id !== id));
  }
  return (
    <div className='container'>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} placeholder='Enter Todo '/>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {data.map(({text, id}) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)} className='one'>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App