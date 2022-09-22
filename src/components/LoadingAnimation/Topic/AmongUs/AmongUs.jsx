import React from "react";
import "./AmongUs.css";

const AmongUs = ({ active, setActive }) => {
  return (
    <div
      className={`among-us ${active ? "active" : ""}`}
      onClick={() => setActive(false)}
    >
      <div className="among-container">
        <div className="among-effects"></div>
        <div className="among-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AmongUs;
