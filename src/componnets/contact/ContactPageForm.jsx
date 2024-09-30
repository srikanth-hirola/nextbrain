/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const ContactPageForm = () => {
  return (
    <section className="contact-page-form">
        <div className="container-main">
      <div className="contact-page-form-sub" >
         <div className="contact-page-for-main">
         <div className="contact-page-form-text">
            <div className="contact-page-form-text-one">
              <h2>Get In Touch</h2>
              <strong>Let's get in touch with us.</strong>
              <p>
                If you would like to work with us or just want to get in touch,
                we’d love to hear from you!
              </p>
              <a href="tel:+919885225554">+919885225554</a>
            </div>
            <div className="contact-page-form-text-two">
              <a href="#">FaceBook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <form className="contact-page-form-form">
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone" required />
              <select required>
                <option value="" disabled selected>Select Electric Bike Model</option>
                <option value="model1">Model 1</option>
                <option value="model2">Model 2</option>
                <option value="model3">Model 3</option>
              </select>
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-row">
              <textarea placeholder="Message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
         </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageForm;
