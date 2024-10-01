/* eslint-disable react/prop-types */
// Drawer.js
import React, { useState } from "react";
import { gsap } from "gsap";
import { RiCloseLargeLine } from "react-icons/ri";
const Drawer = ({ isOpen, onClose }) => {
  const drawerRef = React.useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    acceptedTerms: false,
  });

  React.useEffect(() => {
    if (isOpen) {
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
    onClose(); // Close the drawer after submission
  };

  return (
   <div className="drawer-container">
     <div
      ref={drawerRef}
      className={`drawer ${isOpen ? "open" : ""}`}
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s ease",
      }}
    >
      <div onClick={onClose} className="close-button">
        <RiCloseLargeLine />
      </div>
      <h2>Send your information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
          />
          I accept the terms in the Privacy Policy
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
   </div>
  );
};

export default Drawer;

// /* eslint-disable react/prop-types */
// // Drawer.js
// import React from "react";
// import { gsap } from "gsap";

// const Drawer = ({ isOpen, onClose }) => {
//   const drawerRef = React.useRef();

//   React.useEffect(() => {
//     if (isOpen) {
//       gsap.to(drawerRef.current, {
//         x: 0,
//         duration: 0.5,
//         ease: "power3.out",
//       });
//     } else {
//       gsap.to(drawerRef.current, {
//         x: "100%", // Change to 100% to slide out to the right
//         duration: 0.5,
//         ease: "power3.in",
//       });
//     }
//   }, [isOpen]);

//   return (
//    <div className="drawer-container">
//      <div
//       ref={drawerRef}
//       className={`drawer ${isOpen ? "open" : ""}`}
//       style={{
//         transform: isOpen ? "translateX(0)" : "translateX(100%)", // Change to 100% for the right drawer
//         transition: "transform 0.5s ease",
//       }}
//     >
//       <button onClick={onClose}>Close</button>
//       <h2>Order Form</h2>
//       {/* Place your form here */}
//       <form>
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//    </div>
//   );
// };

// export default Drawer;
