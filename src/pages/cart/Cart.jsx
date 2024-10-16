/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Checkout from './components/Checkout';
import CartItems from './components/CartItems';
const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: 'Item 1', price: 20 },
    { name: 'Item 2', price: 30 },
    // Add more items as needed
  ]);

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleBack = () => {
    setIsCheckout(false);
  };

  return (
    <div  className='crt' >
      {isCheckout ? (
        <Checkout onBack={handleBack} />
      ) : (
        <CartItems items={cartItems} onCheckout={handleCheckout} />
      )}
    </div>
  );
};

export default Cart;
