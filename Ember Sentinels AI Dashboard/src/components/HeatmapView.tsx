import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/heatmap.css";

export default function HeatmapView() {
  const { grid } = useSentinel();

  return (
    <div className="panel">
      <h2 className="panel-title">Heatmap Risk View</h2>
      <div className="heatmap">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              className={`heatmap-cell risk-${Math.min(Math.floor(cell.risk / 10), 4)}`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}
