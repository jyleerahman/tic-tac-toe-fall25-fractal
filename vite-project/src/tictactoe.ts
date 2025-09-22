// Board : 1D array * 9 (null | "O" | "X")
// game status win, lose or draw
type Player = "X" | "O"
type Cell = Player | null
type Status = "in_progress" | "win" | "draw"

export type GameState = {
  board: Readonly<Cell[]>
  turn: Player
  status: Status
  winner?: Player
  winningLine?: number[]
}

export function makeMove(game: GameState, player: Player, index: number): GameState {
  if (game.status !== "in_progress") return game
  if (game.turn !== player) return game
  if (game.board[index] !== null) return game

  const nextBoard = [...game.board]; nextBoard[index] = player
  const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] as const
  const winLine = LINES.find(([a,b,c]) => nextBoard[a]===player && nextBoard[b]===player && nextBoard[c]===player)

if (winLine) return { ...game, board: nextBoard, status: "win", winner: player, winningLine: [...winLine] }

if (nextBoard.every(c => c !== null)) {
  return { ...game, 
    board: nextBoard, 
    status: "draw", 
    winner: undefined, 
    winningLine: undefined }
}

return { 
    ...game, 
    board: nextBoard, 
    status: "in_progress", 
    turn: player === "X" ? "O" : "X", 
    winner: undefined, 
    winningLine: undefined }
}


// player 1, player 2 take turns
// who won? 3 cell line 


// Win highlight: store winningLine in state
// Draw: detect by scanning for no empties
