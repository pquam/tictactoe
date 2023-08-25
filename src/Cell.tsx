import React from 'react';

interface CellProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="self-auto p-4 flex-1 flex items-center justify-center w-16 h-16 border bg-white text-3xl font-bold focus:outline-none"
    >
      <h3 className="indicator"> {value} </h3>
    </button>
  );
}

export default Cell;
