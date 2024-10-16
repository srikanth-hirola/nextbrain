/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'; // You might need to install Ant Design Icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic 
    console.log('Logging in user:', formData);
  };

  return (
    <div className="login">
      <div className="login__image">
        <img src="assets/banner.png" alt="Login" />
      </div>
      <div className="login__form">
        <div className="login-text">
          <div className="logo">
            <img src="assets/logo.svg" alt="Logo" />
          </div>
          <div className="login-info">
            <h2>Login</h2>
            <p>Please enter your email and password to login.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login__inputs">
          <div className="log-in">
            <label>
              <span>Email</span>
            </label>
            <input 
              type="email" 
              name="email" 
              placeholder=" " 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="log-in ">
            <label>
              <span>Password</span>
            </label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              placeholder=" " 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <span 
              className="password-icon" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          <div className="login__buttons">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="not-registered">
          Don't have an account? 
          <span>
            <Link to="/register"> Sign Up </Link>
          </span>
        </div>
        <div className="not-registered">
          Didint remember password
          <span>
            <Link to="/forgot-password"> Click Here </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
