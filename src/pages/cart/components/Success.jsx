/* eslint-disable no-unused-vars */
// PaymentSuccess.js
import React, { useEffect, useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // To dynamically adjust confetti size
import Header from "../../../componnets/common/Header";
import Footer from "../../../componnets/common/Footer";

const Success = () => {
  const [confettiActive, setConfettiActive] = useState(true);
  const { width, height } = useWindowSize(); 

  useEffect(() => {
    gsap.fromTo(
      ".success-icon",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "bounce" }
    );

    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <Header />
      <div className="payment-success-main">
        {/* Conditionally render Confetti */}
        {confettiActive && <Confetti width={width} height={height} />}

        <div className="payment-success">
          <div className="icon-container">
            <IoCheckmarkCircleSharp className="success-icon" size={80} color="green" />
          </div>
          <h2>Payment Successful!</h2>
          <p>Your order has been placed successfully.</p>
          <div className="links">
            <Link to="/" className="home-link">
              Go to Homepage
            </Link>
            <Link to="/profile" className="order-link">
              View Order
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;

// /* eslint-disable no-unused-vars */
// // PaymentSuccess.js
// import React, { useEffect } from "react";
// import { IoCheckmarkCircleSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import Header from "../../../componnets/common/Header";
// import Footer from "../../../componnets/common/Footer";

// const Success = () => {
//   useEffect(() => {
//     // GSAP animation for success icon
//     gsap.fromTo(
//       ".success-icon",
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1, ease: "bounce" }
//     );
//   }, []);

//   return (
//    <>
//    <Header/>
//     <div className="payment-success-main">
//     <div className="payment-success">
//       <div className="icon-container">
//         <IoCheckmarkCircleSharp className="success-icon" size={80} color="green" />
//       </div>
//       <h2>Payment Successful!</h2>
//       <p>Your order has been placed successfully.</p>
//       <div className="links">
//         <Link to="/" className="home-link">
//           Go to Homepage
//         </Link>
//         <Link to="/orders" className="order-link">
//           View Order
//         </Link>
//       </div>
//     </div>
//     </div>
//     <Footer/>
//    </>
//   );
// };

// export default Success;
