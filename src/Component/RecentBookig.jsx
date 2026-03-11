import React from "react";

function RecentBooking() {
  const data = [
    { name: "New Delhi to Dhaka", type: "Oneway", price: "₹20000", status: "Pending" },
    { name: "New Delhi to Dhaka", type: "Oneway", price: "₹20000", status: "Pending" },
    { name: "New Delhi to Dhaka", type: "Oneway", price: "₹20000", status: "Pending" },
    { name: "New Delhi to Dhaka", type: "Oneway", price: "₹20000", status: "Pending" },
    { name: "New Delhi to Dhaka", type: "Oneway", price: "₹20000", status: "Pending" },
  ];

  return (
    <div className="table">
      <h3>Recent Booking</h3>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
              <td style={{color:"#6c5ce7"}}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentBooking;