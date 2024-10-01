/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CartDrawer.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { RiCloseLargeLine } from "react-icons/ri";
import Cart from "../../pages/cart/Cart";

const CartDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef();

  useEffect(() => {
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

  return (
    <div className="cart-container">
      <div
        ref={drawerRef}
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s ease",
        }}
      >
        <div onClick={onClose} className="close-button">
          <RiCloseLargeLine />
        </div>
        <Cart /> {/* Use the Cart component here */}
      </div>
    </div>
  );
};

export default CartDrawer;
