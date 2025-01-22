import React, { useState } from 'react'

const App = () => {
  const [backgroundColor, setBackGroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonStyle, setButtonStyle] = useState("white");
 const handleChange = () => {
  setBackGroundColor(backgroundColor==="white"? "black": "white")
  setTextColor(textColor === "black"? "white": "black")
  setButtonStyle(buttonStyle=="white"? "black": "white")
 }
  return (
    <div style={{backgroundColor, color: textColor}}>
        <button onClick={handleChange} style={{color: textColor, buttonStyle, border: `3px solid ${textColor}`}}>
          {backgroundColor== "white"? "White Theme": "Black Theme"}
        </button>
        <p>I love Nepal</p>
        <p>I am from Dhading Nepal</p>
    </div>
  )
}

export default App