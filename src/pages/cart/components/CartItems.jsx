/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CartItems.js
import React, { useState } from "react";
import cartData from '../../../data/cart.json';

const CartItems = ({ onCheckout }) => {
  const { cartItems } = cartData;
  const [quantities, setQuantities] = useState(
    cartItems.map(item => item.quantity)
  );

  const handleIncrement = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };
  return (
    <div>
      <h2>Your Cart Items</h2>
      <div className="cart-main" >
      {cartItems.length > 0 ? (
        cartItems.map((item,index ) => (
           <div className="cart-main-new"  key={index}>
            <div className="cart-img">
              <img src={item.image} alt={item.productName} />
            </div>
            <div className="cart-item">
              <h2>{item.productName} - ({item.productId}) </h2>
              <h3>{item.brand} <span> </span></h3>
          <div className="price-sec">
          <p> Price: <strong>{item.price}</strong></p>
             <div className="quantity-counter">
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => handleIncrement(index)}>+</button>
                </div>
          </div>
            </div>
           </div>
        ))
      ) : (
        <p>No items in your cart.</p>
      )}
      </div>
      <button onClick={onCheckout} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default CartItems;
