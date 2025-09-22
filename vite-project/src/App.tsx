import { useState } from 'react'
import './App.css'
import {type GameState, makeMove } from './tictactoe.ts'

function App() {
  const initialGameState: GameState = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X",
      status: "in_progress"
  }
  const [gameState, setGameState] = useState(initialGameState) 

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="tictactoe-button">
        <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 0))}>
          {gameState.board[0] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 1))}>
          {gameState.board[1] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 2))}>
          {gameState.board[2] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 3))}>
          {gameState.board[3] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 4))}>
          {gameState.board[4] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 5))}>
          {gameState.board[5] ?? ""}</button> 

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 6))}>
          {gameState.board[6] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 7))}>
          {gameState.board[7] ?? ""}</button>

         <button onClick={() => setGameState(prev => makeMove(prev, prev.turn, 8))}>
          {gameState.board[8] ?? ""}</button>
      </div>
      <div>
        <p>🎉 Winner: {gameState.turn} 🎉</p>
      </div>
    </>
  )
}

export default App
