import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Trips from "./Trips";
import Cart from "./Cart";

function DashboardApp() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);

  // Add to Cart function
  const addToCart = (trip) => {
    setCart([...cart, trip]);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Dashboard />;

      case "trips":
        return <Trips addToCart={addToCart} />;

      case "cards":
        return <Cart cart={cart} removeFromCart={removeFromCart} />;

      case "expenses":
        return <h2 style={{ padding: "20px" }}>Expenses Page</h2>;

      case "analytics":
        return <h2 style={{ padding: "20px" }}>Analytics Page</h2>;

      case "approvals":
        return <h2 style={{ padding: "20px" }}>Approvals Page</h2>;

      case "settings":
        return <h2 style={{ padding: "20px" }}>Setting Page</h2>;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        setActivePage={setActivePage}
        activePage={activePage}
        cartCount={cart.length}
      />

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default DashboardApp;