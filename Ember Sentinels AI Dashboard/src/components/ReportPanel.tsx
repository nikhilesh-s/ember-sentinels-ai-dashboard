import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/logs.css";

export default function ReportPanel() {
  const { grid, selectedCell, logs, riskHistory } = useSentinel();

  const handleDownloadReport = () => {
    const flatCells = grid.flat();

    const avgRisk =
      flatCells.reduce((sum, c) => sum + c.risk, 0) / (flatCells.length || 1);
    const maxRisk = flatCells.reduce((max, c) => Math.max(max, c.risk), 0);

    const report = {
      generatedAt: new Date().toISOString(),
      summary: {
        totalSentinels: flatCells.length,
        avgRisk: Number(avgRisk.toFixed(1)),
        maxRisk,
      },
      selectedCell: selectedCell || null,
      recentLogs: logs.slice(0, 20),
      riskHistory,
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ember-sentinels-report.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="panel report-panel">
      <h2 className="panel-title">Reports & Export</h2>
      <p className="report-description">
        Generate a lightweight JSON report of the current Sentinel network state for further
        analysis, or print this view for documentation.
      </p>

      <div className="report-actions">
        <button className="report-button primary" onClick={handleDownloadReport}>
          Download JSON Report
        </button>
        <button className="report-button secondary" onClick={handlePrint}>
          Print Dashboard View
        </button>
      </div>

      <p className="report-note">
        In a full deployment, exported reports could be integrated into research pipelines, model
        retraining workflows, or shared with wildfire agencies for audit and evaluation.
      </p>
    </div>
  );
}
