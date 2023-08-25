import './App.css'
import './index.css'
import React, { useState, useEffect } from 'react'; // Import useEffect
import Cell from './Cell.tsx';
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        	<h1 className='titletext'>Tic Tac Toe</h1>
    	</div>
      <TicTacToeBoard />
    </>
  )
}


const TicTacToeBoard: React.FC = () => {
  const [board, setBoard] = useState<( 'X' | 'O' | null)[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const checkWinner = (board: ('X' | 'O' | null)[]) => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const [a, b, c] of winningCombination) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index]) {
      return;
    }

    const newBoard = [...board];
    if (turn % 2 === 0) {
      newBoard[index] = 'X'; 
    } else {
      newBoard[index] = 'O';
    }

    setBoard(newBoard);
    setTurn(turn + 1);
  };

  // Add a useEffect to watch for board updates
  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      alert(`${winner} has won!`);
      reset();
      return;
    }

    // Check for a tie (cat's game)
    if (turn === 8) {
      alert("It's a tie!");
      reset();
    }
  }, [board, turn]);  // The effect depends on the board and turn states

  return (
    <div className="justify-center items-center">
      <div className="grid grid-rows-3 grid-cols-3 gap-8">
        {board.map((cellValue, index) => (
          <Cell key={index} value={cellValue} onClick={() => handleCellClick(index)} />
        ))}
      </div>
    </div>
  );
};

function reset() {
  board.fill(null)
};

export default App
