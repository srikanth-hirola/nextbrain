/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'; // You might need to install Ant Design Icons

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Resetting password:', formData);
  };

  return (
    <div className="login">
      <div className="login__image">
        <img src="assets/banner.png" alt="Forgot Password" />
      </div>
      <div className="login__form">
        <div className="login-text">
          <div className="logo">
            <img src="assets/logo.svg" alt="Logo" />
          </div>
          <div className="login-info">
            <h2>Forgot Password</h2>
            <p>Please enter your old password and new password.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login__inputs">
          <div className="log-in">
            <label>
              <span>Old Password</span>
            </label>
            <input 
              type={showOldPassword ? 'text' : 'password'} 
              name="oldPassword" 
              placeholder=" " 
              value={formData.oldPassword} 
              onChange={handleChange} 
              required 
            />
            <span 
              className="password-icon" 
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          <div className="log-in">
            <label>
              <span>New Password</span>
            </label>
            <input 
              type={showNewPassword ? 'text' : 'password'} 
              name="newPassword" 
              placeholder=" " 
              value={formData.newPassword} 
              onChange={handleChange} 
              required 
            />
            <span 
              className="password-icon" 
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          <div className="log-in">
            <label>
              <span>Confirm New Password</span>
            </label>
            <input 
              type={showConfirmPassword ? 'text' : 'password'} 
              name="confirmPassword" 
              placeholder=" " 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />
            <span 
              className="password-icon" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          <div className="login__buttons">
            <button type="submit">Reset Password</button>
          </div>
        </form>
        <div className="not-registered">
          Remembered your password? 
          <span>
            <Link to="/login"> Login </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
