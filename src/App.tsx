import './App.css'
import './index.css'
import React, { useState } from 'react';
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
  const [turn, setTurn] = useState(0); // Use state for turn

  const handleCellClick = (index: number) => {
    if (board[index]) {
      return; // Cell already filled, do nothing
    }

    const newBoard = [...board];
    if (turn % 2 === 0) {
      newBoard[index] = 'X'; 
    } else {
      newBoard[index] = 'O';
    }

    setBoard(newBoard);
    setTurn(turn + 1);  // Increment the turn
  }

  return (
    <div className="justify-center items-center">
      <div className="grid grid-rows-3 grid-cols-3 gap-8">
        {board.map((cellValue, index) => (
          <Cell key={index} value={cellValue} onClick={() => handleCellClick(index)} />
        ))}
      </div>
    </div>
  );
}


export default App
