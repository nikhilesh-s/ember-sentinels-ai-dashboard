import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/grid.css";

export default function GridMap() {
  const { grid, selectedCell, setSelectedCell, regenerateRisk } = useSentinel();

  return (
    <div className="panel grid-panel">
      <h2 className="panel-title">Sentinel Grid Map</h2>

      <div className="grid">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              className={`grid-cell ${
                selectedCell?.x === r && selectedCell?.y === c ? "active-cell" : ""
              } risk-${Math.min(Math.floor(cell.risk / 10), 4)}`}
              onClick={() => {
                setSelectedCell(cell);
                regenerateRisk(r, c);
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}
