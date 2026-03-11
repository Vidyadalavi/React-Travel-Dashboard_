import React from "react";
import DashboardNavbar from './DashboardNavbar';
import StatCard from "./StatCard";
import PendingTask from "./PendingTask";
import RecentBooking from "./RecentBookig";
import './Dashboard.css';
function Dashboard() {
  return (
    <div className="main-content">
      <DashboardNavbar />

      <div className="cards">
        <StatCard title="Total Booked" amount="$24,590" purple />
        <StatCard title="30 Days Revenue" amount="$18,680" />
        <StatCard title="Total Customers" amount="$50,680" />
        <StatCard title="Tour Packages" amount="$16,590" />
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:"20px"}}>
        <PendingTask />
        <RecentBooking />
      </div>
    </div>
  );
}

export default Dashboard;