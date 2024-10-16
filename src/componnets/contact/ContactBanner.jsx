/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../common/Header";

const ContactBanner = () => {
  return (
   <div>
    <Header/>
    <div className="contact-banner">
     <div className="container">
     <div className="container-main">
        <div className="contact-banner-main">
          <div className="contact-banner-main-one">
            <strong>Contact Us</strong>
            <h2>Let's make your brand brilliant!</h2>
          </div>
          <div className="contact-banner-main-two">
            <p>
              We help our clients succeed by creating brand identities, digital
              experiences, and print materials that communicate clearly, achieve
              marketing goals, and look fantastic.
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
   </div>
  );
};

export default ContactBanner;
