import React from "react";
import {
  FaHome,
  FaSuitcase,
  FaFileInvoiceDollar,
  FaChartBar,
  FaCog,
  FaCreditCard,
  FaCheckCircle
} from "react-icons/fa";

function Sidebar({ setActivePage, activePage }) {
  return (
    <div className="sidebar">
      <h2 className="logo">TrailBliss</h2>

      <ul className="menu">

        <li
          className={activePage === "home" ? "active" : ""}
          onClick={() => setActivePage("home")}
        >
          <FaHome className="icon" /> Home
        </li>

        <li
          className={activePage === "trips" ? "active" : ""}
          onClick={() => setActivePage("trips")}
        >
          <FaSuitcase className="icon" /> Trips
        </li>

        <li
          className={activePage === "expenses" ? "active" : ""}
          onClick={() => setActivePage("expenses")}
        >
          <FaFileInvoiceDollar className="icon" /> Expenses
        </li>

        <li
          className={activePage === "cards" ? "active" : ""}
          onClick={() => setActivePage("cards")}
        >
          <FaCreditCard className="icon" /> Cards
        </li>

        <li
          className={activePage === "analytics" ? "active" : ""}
          onClick={() => setActivePage("analytics")}
        >
          <FaChartBar className="icon" /> Analytics
        </li>

        <li
          className={activePage === "approvals" ? "active" : ""}
          onClick={() => setActivePage("approvals")}
        >
          <FaCheckCircle className="icon" /> Approvals
        </li>

        <li
          className={activePage === "settings" ? "active" : ""}
          onClick={() => setActivePage("settings")}
        >
          <FaCog className="icon" /> Settings
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;