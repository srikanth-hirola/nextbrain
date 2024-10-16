/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Payment.js
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const Payment = ({ onBack }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setLoading(true);

    // GSAP animation for button
    gsap.to(".proceed-button", {
      duration: 1,
      scale: 1.1,
      repeat: -1,
      yoyo: true,
    });

    // Simulate payment processing delay
    setTimeout(() => {
      gsap.killTweensOf(".proceed-button"); // Stop animation
      setLoading(false);
      navigate("/payment-success"); // Redirect to success page
    }, 3000); // 3 seconds delay for payment simulation
  };

  return (
    <div className="payment-main">
      <Link to="#" onClick={onBack} className="back-button">
        <IoArrowBackSharp style={{ marginInline: "0.2rem 0.5rem" }} /> Checkout
      </Link>
      <h2>Payment</h2>
      <p>Please enter your payment information below to proceed your order</p>
      <form>
        <div className="pay-cards">
          <label>CardHolder Name</label>
          <input type="text" placeholder="Name on card" />
        </div>
        <div className="pay-cards">
          <label>Card Number:</label>
          <input type="text" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="pay-cards">
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="pay-cards">
          <label>CVV:</label>
          <input type="text" placeholder="123" />
        </div>
      </form>
      <div className="sticy-links">
        <button className="proceed-sticky" onClick={handlePayment} disabled={loading}>
          {loading ? (
            <span className="loading-text">Processing...</span>
          ) : (
            <>
              <MdOutlinePayments style={{ marginInline: "0.2rem 0.5rem" }} />
              Payment
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Payment;

// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// // Payment.js
// import React from "react";
// import { IoArrowBackSharp } from "react-icons/io5";
// import { MdOutlinePayments } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Payment = ({ onBack }) => {
//   return (
// <div className="">

// <div className="payment-main" >
//          <Link to="#" onClick={onBack} className="back-button">
//               <IoArrowBackSharp style={{marginInline:'0.2rem 0.5rem'}} /> Checkout
//             </Link>
//       <h2>Payment</h2>
//       {/* Add payment details here */}
//       <p>Please enter your payment information below to proceed your order</p>
//       <form>
//         <div className="pay-cards" >
//           <label>
//             CardHolder Name
//           </label>
//             <input type="text" placeholder="Name on card" />
//         </div>
//         <div className="pay-cards" >
//           <label>
//             Card Number:
//           </label>
//             <input type="text" placeholder="1234 5678 9012 3456" />
//         </div>
//         <div className="pay-cards" >
//           <label>
//             Expiry Date:
//           </label>
//             <input type="text" placeholder="MM/YY" />
//         </div>
//         <div className="pay-cards" >
//           <label>
//             CVV:
//           </label>
//             <input type="text" placeholder="123" />
//         </div>
//       </form>
//       <div className="sticy-links">
//            <Link to="#"className="proceed-button">
//             <MdOutlinePayments style={{marginInline:'0.2rem 0.5rem'}} /> Payment
//             </Link>
   
//             </div>
//     </div>
// </div>
//   );
// };

// export default Payment;
