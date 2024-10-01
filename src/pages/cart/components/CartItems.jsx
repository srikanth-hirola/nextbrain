/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CartItems.js
import React from "react";

const CartItems = ({ items, onCheckout }) => {
  return (
    <div>
      <h2>Your Cart Items</h2>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>No items in your cart.</p>
      )}
      <button onClick={onCheckout} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default CartItems;
