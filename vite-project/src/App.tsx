import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="tictactoe-button">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button> 
        <button></button>
        <button></button>
        <button></button>
      </div>
    </>
  )
}

export default App
