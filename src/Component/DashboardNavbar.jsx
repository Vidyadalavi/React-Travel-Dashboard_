import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate;
  const Logout=()=>{
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h2>Home</h2>
      <input placeholder="Search..." style={styles.search}/>
      <div>👤 vidya</div>
      <div>
      <button ><a href="/">Logout</a></button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  search: {
    padding: "8px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  }
};

export default DashboardNavbar;