import React from "react";
import { useSentinel } from "../context/SentinelContext";
import "../styles/camera.css";

export default function CameraView() {
  const { cameraView, setCameraView } = useSentinel();

  return (
    <div className="panel camera-panel">
      <h2 className="panel-title">Live Tower View</h2>

      <select
        className="camera-select"
        value={cameraView}
        onChange={(e) => setCameraView(e.target.value)}
      >
        <option value="towerA">Tower A — North Ridge</option>
        <option value="towerB">Tower B — Valley View</option>
        <option value="towerC">Tower C — Forest Edge</option>
      </select>

      <div className="fake-camera">
        <p>{cameraView} Feed</p>
        <p className="camera-caption">(Static placeholder image)</p>
      </div>
    </div>
  );
}
