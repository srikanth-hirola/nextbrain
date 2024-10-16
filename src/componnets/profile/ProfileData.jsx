/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ProfileData.js
import React from 'react';

const ProfileData = () => {
  return (
   <div className="profile-pagedata">
    <div className="profile-info-one">
            <div className="profile-info-one-text">
                <h2>Welcome NextBrain</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti optio libero nobis voluptatum harum.</p>
            </div>
    </div>
    <div className="register__inputs">
      <div className="reg-in">
        <label>
          <span>Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder=" "
          defaultValue="John Doe" // Static value
          required
        />
      </div>
      <div className="reg-in">
        <label>
          <span>Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder=" "
          defaultValue="johndoe@example.com" // Static value
          required
        />
      </div>
      <div className="reg-in">
        <label>
          <span>Mobile Number</span>
        </label>
        <input
          type="tel"
          name="mobile"
          placeholder=" "
          defaultValue="1234567890" // Static value
          required
        />
      </div>
      <div className="reg-in">
        <label>
          <span>Pincode</span>
        </label>
        <input
          type="text"
          name="pincode"
          placeholder=" "
          defaultValue="123456" // Static value
          required
        />
      </div>
      <div className="reg-in">
        <label>
          <span>City</span>
        </label>
        <input
          type="text"
          name="city"
          placeholder=" "
          defaultValue="New York" // Static value
          required
        />
      </div>
      <div className="reg-in">
        <label>
          <span>State</span>
        </label>
        <input
          type="text"
          name="state"
          placeholder=" "
          defaultValue="New York" // Static value
          required
        />
      </div>
      <div className="reg-in">
        <label>
          <span>Country</span>
        </label>
        <input
          type="text"
          name="country"
          placeholder=" "
          defaultValue="United States" // Static value
          required
        />
      </div>
    </div>
   </div>
  );
};

export default ProfileData;
