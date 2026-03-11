import React from "react";

function StatCard({ title, amount, purple }) {
  return (
    <div className={`card ${purple ? "purple-card" : ""}`}>
      <h4>{title}</h4>
      <h2>{amount}</h2>
      <p style={{fontSize:"12px", opacity:0.7}}>+12.08%</p>
    </div>
  );
}

export default StatCard;