/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'; // Import Eye icons from Ant Design

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step === 1) {
      // Blurry reveal animation for address inputs
      gsap.fromTo('.address-inputs', { opacity: 0, filter: 'blur(10px)', y: 20 }, { opacity: 1, filter: 'blur(0)', y: 0, duration: 0.5 });
      setStep(2);
    } else if (step === 2) {
      // Move to password step
      gsap.fromTo('.password-inputs', { opacity: 0, filter: 'blur(10px)', y: 20 }, { opacity: 1, filter: 'blur(0)', y: 0, duration: 0.5 });
      setStep(3);
    } else if (step === 3) {
      // Handle registration logic here
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Registering user:', formData);
      // Navigate to login page here
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="register">
      <div className="register__image">
        <img src="assets/banner.png" alt="Register" />
      </div>
      <div className="register__form">
        <div className="register-text">
          <div className="logo">
            <img src="assets/logo.svg" alt="Logo" />
          </div>
          <div className="register-info">
            <h2>Sign Up</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet accusantium a maxime. Id, dolores ipsa.</p>
          </div>
        </div>
        {step === 1 && (
          <div className="register__inputs">
            <div className="reg-in">
              <label>
                <span>Name</span>
              </label>
              <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
            </div>
            <div className="reg-in">
              <label>
                <span>Email</span>
              </label>
              <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
            </div>
            <div className="reg-in">
              <label>
                <span>Mobile Number</span>
              </label>
              <input type="tel" name="mobile" placeholder=" " value={formData.mobile} onChange={handleChange} required />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="register__inputs address-inputs">
            <div className="reg-in">
              <label>
                <span>Pincode</span>
              </label>
              <input type="text" name="pincode" placeholder=" " value={formData.pincode} onChange={handleChange} required />
            </div>
            <div className="reg-in">
              <label>
                <span>City</span>
              </label>
              <input type="text" name="city" placeholder=" " value={formData.city} onChange={handleChange} required />
            </div>
            <div className="reg-in">
              <label>
                <span>State</span>
              </label>
              <input type="text" name="state" placeholder=" " value={formData.state} onChange={handleChange} required />
            </div>
            <div className="reg-in">
              <label>
                <span>Country</span>
              </label>
              <input type="text" name="country" placeholder=" " value={formData.country} onChange={handleChange} required />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="register__inputs password-inputs">
            <div className="reg-in">
              <label>
                <span>Password</span>
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder=" "
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
              </div>
            </div>
            <div className="reg-in">
              <label>
                <span>Confirm Password</span>
              </label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder=" "
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="register__buttons">
          {step > 1 && <button className='back-btn' onClick={handleBack}>Back</button>}
          <button onClick={handleNext}>{step === 3 ? 'Register' : 'Next'}</button>
        </div>
        <div className="already">
          Already Have an account? <span>
            <Link to='/login'>Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
