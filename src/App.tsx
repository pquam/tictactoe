import './App.css'
import './index.css'
import React, { useState } from 'react';
import Cell from './Cell.tsx';
import 'tailwindcss/tailwind.css'

function App() {

  return (
    <>
      <div className="flex justify-center items-center">
        	<h1>Tic Tac Toe</h1>
    	</div>
	<TicTacToeBoard />
    </>
  )
}

const TicTacToeBoard: React.FC = () => {
  const [board, setBoard] = useState<( 'X' | 'O' | null)[]>(Array(9).fill(null));

  const handleCellClick = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = 'X';  // For now, just setting 'X'. Later you'll implement turn logic.
    setBoard(newBoard);
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
