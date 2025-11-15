import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/ai.css";

export default function AIPanel() {
  const { selectedCell } = useSentinel();

  if (!selectedCell)
    return (
      <div className="panel ai-panel">
        <h2 className="panel-title">AI Interpretation</h2>
        <p>Select a cell on the grid to analyze.</p>
      </div>
    );

  const risk = selectedCell.risk;
  const confidence = 70 + Math.floor(Math.random() * 25);
  const patternOptions = [
    "Localized VOC cluster",
    "Temperature anomaly",
    "Chemical outgassing pattern",
    "Stable readings",
    "Low-level vegetation stress",
  ];
  const pattern = `${patternOptions[Math.floor(Math.random() * patternOptions.length)]} near (${selectedCell.x}, ${selectedCell.y})`;

  return (
    <div className="panel ai-panel">
      <h2 className="panel-title">AI Interpretation</h2>

      <div className="ai-metric">
        <label>Risk Score:</label>
        <div className="metric-box">{risk}</div>
      </div>

      <div className="ai-metric">
        <label>Model Confidence:</label>
        <div className="metric-box">{confidence}%</div>
      </div>

      <div className="ai-metric">
        <label>Detected Pattern:</label>
        <div className="pattern-box">{pattern}</div>
      </div>

      <div className="ai-pattern-legend">
        <h3>Legend</h3>
        <ul>
          <li>VOC Cluster — Possible vegetation stress</li>
          <li>Temp Anomaly — Local heat rise</li>
          <li>Chemical Outgassing — Pre-ignition indicator</li>
          <li>Stable — No action needed</li>
        </ul>
      </div>
    </div>
  );
}
