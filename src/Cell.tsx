import React from 'react';

interface CellProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="w-24 h-24 border bg-white text-3xl font-bold focus:outline-none"
    >
      {value}
    </button>
  );
}

export default Cell;
