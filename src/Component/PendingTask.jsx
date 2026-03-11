import React from "react";

function PendingTask() {
  return (
    <div className="card">
      <h3>Pending Approval</h3>
      <h2>$1,200.00</h2>
      <p>From: Indigo Tavares</p>
      <p>To: Make my trip Tavares</p>
      <div style={{marginTop:"15px"}}>
        <button style={styles.reject}>Reject</button>
        <button style={styles.approve}>Approve</button>
      </div>
    </div>
  );
}

const styles = {
  reject: {
    padding: "8px 12px",
    marginRight: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  approve: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    background: "#6c5ce7",
    color: "white"
  }
};

export default PendingTask;