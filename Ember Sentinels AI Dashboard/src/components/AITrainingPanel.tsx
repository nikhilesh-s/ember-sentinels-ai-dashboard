import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/ai.css";

export default function AITrainingPanel() {
  const { riskHistory } = useSentinel();

  if (riskHistory.length === 0) {
    return (
      <div className="panel ai-training-panel">
        <h2 className="panel-title">AI Training Mode</h2>
        <p className="training-description">
          Interact with the Sentinel grid to generate simulated training data. Each update adds a
          new point to the risk timeline below.
        </p>
        <p className="training-placeholder">
          No samples yet — click on any Sentinel cell to update risk and generate data.
        </p>
      </div>
    );
  }

  const recent = riskHistory.slice(-15);
  const latest = recent[recent.length - 1];

  const base = Math.min(latest.avgRisk, 40);
  let clusterImportance = Math.min(40, base + 10);
  let tempImportance = Math.min(30, 10 + base * 0.4);
  let drynessImportance = Math.min(20, 5 + base * 0.25);
  let humidityImportance = 100 - (clusterImportance + tempImportance + drynessImportance);

  const total =
    clusterImportance + tempImportance + drynessImportance + humidityImportance;
  clusterImportance = (clusterImportance / total) * 100;
  tempImportance = (tempImportance / total) * 100;
  drynessImportance = (drynessImportance / total) * 100;
  humidityImportance = (humidityImportance / total) * 100;

  return (
    <div className="panel ai-training-panel">
      <h2 className="panel-title">AI Training Mode</h2>
      <p className="training-description">
        This view treats each Sentinel update as a training sample for an early-warning model. The
        charts below approximate how an AI system might learn from patterns in average risk over
        time and key environmental features.
      </p>

      <div className="training-section">
        <h3>Risk Timeline (Simulated Training Samples)</h3>
        <div className="training-chart">
          {recent.map((snap, idx) => (
            <div key={idx} className="training-bar-wrapper">
              <div
                className="training-bar"
                style={{
                  height: `${Math.min(100, snap.avgRisk * 2)}%`,
                }}
              ></div>
              <div className="training-bar-label">
                {idx === recent.length - 1 ? "Now" : ""}
              </div>
            </div>
          ))}
        </div>
        <p className="training-caption">
          Each bar represents a simulated training sample capturing the average risk across the
          Sentinel network at a point in time.
        </p>
      </div>

      <div className="training-section">
        <h3>Feature Importance (Explainable AI Approximation)</h3>
        <div className="training-feature-grid">
          <div className="feature-item">
            <span className="feature-label">Cluster Size / Density</span>
            <div className="feature-bar-outer">
              <div
                className="feature-bar-inner feature-cluster"
                style={{ width: `${clusterImportance}%` }}
              ></div>
            </div>
            <span className="feature-value">{clusterImportance.toFixed(0)}%</span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Temperature Signals</span>
            <div className="feature-bar-outer">
              <div
                className="feature-bar-inner feature-temp"
                style={{ width: `${tempImportance}%` }}
              ></div>
            </div>
            <span className="feature-value">{tempImportance.toFixed(0)}%</span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Vegetation Dryness (Proxy)</span>
            <div className="feature-bar-outer">
              <div
                className="feature-bar-inner feature-dryness"
                style={{ width: `${drynessImportance}%` }}
              ></div>
            </div>
            <span className="feature-value">{drynessImportance.toFixed(0)}%</span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Humidity / Moisture</span>
            <div className="feature-bar-outer">
              <div
                className="feature-bar-inner feature-humidity"
                style={{ width: `${humidityImportance}%` }}
              ></div>
            </div>
            <span className="feature-value">{humidityImportance.toFixed(0)}%</span>
          </div>
        </div>
        <p className="training-caption">
          These weights simulate how an AI model might attribute risk to different environmental and
          spatial factors when predicting wildfire ignition risk.
        </p>
      </div>
    </div>
  );
}
