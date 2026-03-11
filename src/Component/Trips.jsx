import React from "react";
import travelData from "../data/TravelData";

function Trips({ addToCart }) {
  return (
    <div>
      <h2>Explore Packages</h2>

      <div className="cards-item">
        {travelData.map((trip) => (
          <div className="card-item" key={trip.id}>
            <img src={trip.image} alt={trip.name} />
            <h3>{trip.name}</h3>
            <p>{trip.days} Days</p>
            <p>₹{trip.price}</p>

            <button onClick={() => addToCart(trip)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;