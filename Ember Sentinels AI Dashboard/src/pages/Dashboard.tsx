import React from "react";
import GridMap from "../components/GridMap";
import HeatmapView from "../components/HeatmapView";
import CameraView from "../components/CameraView";
import AIPanel from "../components/AIPanel";
import SentinelHealth from "../components/SentinelHealth";
import LogPanel from "../components/LogPanel";
import AITrainingPanel from "../components/AITrainingPanel";
import ReportPanel from "../components/ReportPanel";
import { SentinelProvider } from "../context/SentinelContext";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <SentinelProvider>
      <div className="dashboard-layout">

        <div className="left-column">
          <GridMap />
          <HeatmapView />
        </div>

        <div className="middle-column">
          <CameraView />
          <LogPanel />
          <ReportPanel />
        </div>

        <div className="right-column">
          <AIPanel />
          <AITrainingPanel />
          <SentinelHealth />
        </div>

      </div>
    </SentinelProvider>
  );
}
