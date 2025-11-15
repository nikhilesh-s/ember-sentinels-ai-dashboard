import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/logs.css";

export default function LogPanel() {
  const { logs } = useSentinel();

  return (
    <div className="panel logs-panel">
      <h2 className="panel-title">System Logs</h2>

      <div className="logs-box">
        {logs.length === 0 && <p>No events yet.</p>}
        {logs.map((log, index) => (
          <div key={index} className="log-entry">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
