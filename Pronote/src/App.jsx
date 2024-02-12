import { useState } from 'react'
import './App.css'

function App() {
const[input, setInput] = useState('')

  const handleChange = (e) => {
  setInput((prev) => e.target.value) 
  }
  return (
    <>
    <div className='container'>
      
    <div className='text1'>
    <h1>Text Input</h1>
      <textarea name="UserInput" id="" cols="30" rows="30" onChange={handleChange} className='area1'></textarea>
    </div>
    <div className='text2'>
    <h1>Text Output</h1>
      <textarea name="UserInput" id="" cols="30" rows="30" className='area2' value={input}></textarea>
    </div>
    </div>

    </>
  )
}

export default App
