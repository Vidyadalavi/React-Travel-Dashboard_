import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items added.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item-addToCard">
            <img src={item.image} alt={item.name} width="80" />
            <h4>{item.name}</h4>
            <p>{item.days} Days</p>
            <p>₹{item.price}</p>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;