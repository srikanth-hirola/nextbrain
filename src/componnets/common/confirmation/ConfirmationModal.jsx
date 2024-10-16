/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ConfirmationModal.js
import React from "react";
import { gsap } from "gsap";

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  const modalRef = React.useRef();

  React.useEffect(() => {
    gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }, []);

  return (
   <div>
    <div className="confirm-modal">
         <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <h3>Confirmation</h3>
        <p>Are you sure you want to go back? Your entered payment details will be lost.</p>
        <button onClick={onConfirm} className="confirm-button">Yes, Go Back</button>
        <button onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </div>
    </div>
   </div
  );
};

export default ConfirmationModal;
