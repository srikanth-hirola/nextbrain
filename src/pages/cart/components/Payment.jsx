/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Payment.js
import React from "react";

const Payment = ({ onBack }) => {
  return (
    <div>
      <h2>Payment</h2>
      {/* Add payment details here */}
      <p>Please enter your payment information below.</p>
      <form>
        <div>
          <label>
            Card Number:
            <input type="text" placeholder="1234 5678 9012 3456" />
          </label>
        </div>
        <div>
          <label>
            Expiry Date:
            <input type="text" placeholder="MM/YY" />
          </label>
        </div>
        <div>
          <label>
            CVV:
            <input type="text" placeholder="123" />
          </label>
        </div>
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
      <button onClick={onBack} className="back-button">Back to Checkout</button>
    </div>
  );
};

export default Payment;
