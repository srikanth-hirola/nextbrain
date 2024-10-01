/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Checkout.js
import React, { useState } from "react";
import Payment from "./Payment";

const Checkout = ({ onBack }) => {
  const [isPayment, setIsPayment] = useState(false);

  const handleProceedToPayment = () => {
    setIsPayment(true); 
  };

  return (
    <div>
      {isPayment ? (
        <Payment onBack={() => setIsPayment(false)} /> 
      ) : (
        <>
          <h2>Checkout</h2>
          {/* Add checkout details here */}
          <p>Review your items and proceed to payment.</p>
          <button onClick={handleProceedToPayment} className="proceed-button">
            Proceed to Payment
          </button>
          <button onClick={onBack} className="back-button">
            Back to Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
