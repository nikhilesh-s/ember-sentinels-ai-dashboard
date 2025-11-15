import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/health.css";

export default function SentinelHealth() {
  const { selectedCell } = useSentinel();

  if (!selectedCell)
    return (
      <div className="panel">
        <h2 className="panel-title">Sentinel Health</h2>
        <p>Select a cell to view health metrics.</p>
      </div>
    );

  return (
    <div className="panel">
      <h2 className="panel-title">Sentinel Health</h2>

      <div className="health-box">
        <label>Sticker Integrity:</label>
        <div className="health-bar">
          <div className="health-fill" style={{ width: `${selectedCell.health}%` }}></div>
        </div>
        <p>{selectedCell.health}%</p>
      </div>

      <div>
        <label>Last Update:</label>
        <p>{selectedCell.lastUpdate}</p>
      </div>
    </div>
  );
}
