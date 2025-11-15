import React from "react";
import "../styles/navbar.css";

interface NavbarProps {
  currentPage: "dashboard" | "guide";
  onNavigate: (page: "dashboard" | "guide") => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">🔥</span>
          <span className="brand-text">Ember Sentinels</span>
        </div>

        <div className="navbar-links">
          <button
            className={`nav-link ${currentPage === "dashboard" ? "active" : ""}`}
            onClick={() => onNavigate("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`nav-link ${currentPage === "guide" ? "active" : ""}`}
            onClick={() => onNavigate("guide")}
          >
            How to Use Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}
