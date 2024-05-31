import React from "react";

const TextOverlay = ({ text, color, onChange }) => {
  return (
    <div className="text-overlay">
      <h2 style={{ color: color }}>{text}</h2>
    </div>
  );
};
TextOverlay();

export default 
