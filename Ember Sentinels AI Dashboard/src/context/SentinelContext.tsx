import React, { createContext, useContext, useState } from "react";

const GRID_SIZE = 20;

export interface CellData {
  x: number;
  y: number;
  risk: number;
  health: number;
  lastUpdate: string;
}

export interface RiskSnapshot {
  timestamp: string;
  avgRisk: number;
  maxRisk: number;
}

interface SentinelContextType {
  grid: CellData[][];
  selectedCell: CellData | null;
  setSelectedCell: (cell: CellData | null) => void;

  cameraView: string;
  setCameraView: (c: string) => void;

  logs: string[];
  addLog: (entry: string) => void;

  regenerateRisk: (x: number, y: number) => void;

  riskHistory: RiskSnapshot[];
}

const SentinelContext = createContext<SentinelContextType | null>(null);
export const useSentinel = () => useContext(SentinelContext)!;

export function SentinelProvider({ children }: { children: React.ReactNode }) {
  const [selectedCell, setSelectedCell] = useState<CellData | null>(null);
  const [cameraView, setCameraView] = useState("towerA");
  const [logs, setLogs] = useState<string[]>([]);
  const [riskHistory, setRiskHistory] = useState<RiskSnapshot[]>([]);

  const initialGrid: CellData[][] = Array.from({ length: GRID_SIZE }, (_, row) =>
    Array.from({ length: GRID_SIZE }, (_, col) => ({
      x: row,
      y: col,
      risk: Math.floor(Math.random() * 10),
      health: 100,
      lastUpdate: new Date().toLocaleTimeString(),
    }))
  );

  const [grid, setGrid] = useState(initialGrid);

  function addLog(entry: string) {
    setLogs((prev) => [`${new Date().toLocaleTimeString()} — ${entry}`, ...prev]);
  }

  function regenerateRisk(x: number, y: number) {
    const timestamp = new Date().toLocaleTimeString();

    setGrid((old) => {
      const updated = old.map((row) => row.slice());
      const cell = updated[x][y];

      cell.risk = Math.floor(Math.random() * 50);
      cell.health = Math.max(50, Math.floor(Math.random() * 100));
      cell.lastUpdate = timestamp;

      let sumRisk = 0;
      let maxRisk = 0;
      let count = 0;

      updated.forEach((row) => {
        row.forEach((c) => {
          sumRisk += c.risk;
          maxRisk = Math.max(maxRisk, c.risk);
          count++;
        });
      });

      const avgRisk = count > 0 ? sumRisk / count : 0;

      setRiskHistory((prev) => [
        ...prev,
        {
          timestamp,
          avgRisk: Number(avgRisk.toFixed(1)),
          maxRisk,
        },
      ]);

      addLog(`Risk updated at cell (${x}, ${y}) — new score: ${cell.risk}`);

      return updated;
    });
  }

  return (
    <SentinelContext.Provider
      value={{
        grid,
        selectedCell,
        setSelectedCell,
        cameraView,
        setCameraView,
        logs,
        addLog,
        regenerateRisk,
        riskHistory,
      }}
    >
      {children}
    </SentinelContext.Provider>
  );
}
