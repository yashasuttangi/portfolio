"use client";

import React, { useState } from "react";

interface BackgroundRippleProps {
  rows?: number;
  cols?: number;
  cellSize?: number;
  className?: string;
}

export const BackgroundRipple = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  className = "",
}: BackgroundRippleProps) => {
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(null);

  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
    // Optionally reset after animation (so next click can re-trigger)
    setTimeout(() => {
      setClickedCell(null);
    }, 400); // match your ripple duration
  };

  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `cell-${r}-${c}`;
      const isClicked = clickedCell?.row === r && clickedCell?.col === c;
      cells.push(
        <div
          key={key}
          onClick={() => handleCellClick(r, c)}
          className={`border border-white/10 bg-transparent 
            ${isClicked ? "animate-cell-ripple bg-white/20" : ""}`}
          style={{
            width: cellSize,
            height: cellSize,
          }}
        />
      );
    }
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
    >
      {cells}
    </div>
  );
};
