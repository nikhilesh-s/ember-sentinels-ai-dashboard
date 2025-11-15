import React from "react";
import "../styles/guide.css";

export default function Guide() {
  return (
    <div className="guide-container">
      <div className="guide-content">
        <h1 className="guide-title">How to Use the Ember Sentinels Dashboard</h1>

        <p className="guide-intro">
          The Ember Sentinels Dashboard is the digital command center for understanding wildfire risk through ultra-early chemical and thermal indicators. This guide explains how to navigate and use each feature to simulate, analyze, and interpret pre-ignition wildfire conditions.
        </p>

        <section className="guide-section">
          <h2>1. Interacting With the Sentinel Grid</h2>
          <p className="section-desc">The Sentinel Grid represents a network of deployed Ember Sticker units.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Click any hexagon to "probe" the local environment.</li>
              <li>When clicked, the grid cell will simulate a VOC spike, heat rise, or stable condition.</li>
              <li>The selected cell becomes the focus point for the AI Interpretation Panel.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>How physical Sentinels transmit micro-environment signals to a central tower.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>2. Viewing the Heatmap</h2>
          <p className="section-desc">The Heatmap View gives a top-down picture of wildfire risk intensity.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Toggle the Heatmap mode to display aggregated risk across the grid.</li>
              <li>Areas of elevated chemical or thermal readings appear in stronger colors.</li>
              <li>Use this mode to identify clusters and emerging hotspots.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Wildfire risk is spatial — small pockets of stress appear before ignition.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>3. Using the Tower Camera Module (Simulated)</h2>
          <p className="section-desc">This feature demonstrates how future computer-vision verification would work.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Open the "Tower Camera" panel to view a simulated feed.</li>
              <li>Note how the camera's region overlaps with the Sentinel grid.</li>
              <li>Use it to confirm whether risky areas correspond to visible environmental changes.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Combining chromic sensing + visual verification reduces false positives.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>4. AI Interpretation Panel</h2>
          <p className="section-desc">This is the core of the digital engineering system.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>After selecting a grid cell, view:
                <ul>
                  <li>Predicted Risk Score</li>
                  <li>Model Confidence</li>
                  <li>Chemical vs. Thermal Influence</li>
                  <li>Environmental Category (e.g., VOC spike, thermal anomaly, stable)</li>
                </ul>
              </li>
              <li>Compare these outputs across multiple cells to understand spatial behavior.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>How an AI model digests chromic sensor signals into actionable predictions.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>5. AI Training Mode (Explainable AI)</h2>
          <p className="section-desc">This mode simulates how data would be used to train an early-fire-detection model.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Click multiple cells to generate training samples.</li>
              <li>Watch graphs update live, showing how the model learns risk patterns.</li>
              <li>View the "Feature Importance" panel to see which environmental factors matter most.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>AI models learn by observing environmental variation — not just flames.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>6. Sentinel Health Diagnostics</h2>
          <p className="section-desc">This panel tracks how long a Sentinel has been "active" and how reliable it is.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Select a cell to see its deployment duration and health score.</li>
              <li>Longer exposure reduces the chemical reactivity of chromic layers.</li>
              <li>Use this to understand maintenance and replacement cycles.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Materials degrade outdoors — wildfire systems must consider real-world wear.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>7. System Logs</h2>
          <p className="section-desc">Every action you take generates a record.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Open the Logs panel to track environmental changes, probes, and AI responses.</li>
              <li>Use timestamps to understand how data accumulates in real systems.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Wildfire detection is a time-series problem — trends matter more than snapshots.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>8. Temporal Risk Snapshots</h2>
          <p className="section-desc">Each grid interaction creates a moment in time.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>View snapshots to compare morning vs. evening risk levels.</li>
              <li>Study how simulated VOC and temperature indicators evolve.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Early wildfire indicators fluctuate — AI must learn from time-dependent patterns.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>9. Report Exporting</h2>
          <p className="section-desc">The dashboard enables data extraction for analysis or submission.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Click "Export Report" to download a JSON summary.</li>
              <li>This includes risk scores, heatmaps, logs, training data, and Sentinel health.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Governments and researchers rely on structured data for wildfire planning.</p>
          </div>
        </section>

        <section className="guide-section">
          <h2>10. Mobile Mode</h2>
          <p className="section-desc">The dashboard automatically adapts for emergency use in the field.</p>

          <div className="subsection">
            <h3>How to use it:</h3>
            <ul>
              <li>Open the dashboard on a phone or tablet.</li>
              <li>All panels collapse into swipeable sections.</li>
              <li>Tap grid cells and AI panels just like on desktop.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>What this teaches:</h3>
            <p>Fire detection must work anywhere — especially outdoors.</p>
          </div>
        </section>

        <div className="guide-footer">
          <p>Ready to explore? Return to the Dashboard to start interacting with the Sentinel network.</p>
        </div>
      </div>
    </div>
  );
}
