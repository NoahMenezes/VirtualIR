// src/components/CreateAccount.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css'; // Import the new CSS file

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle account creation logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="create-account-container">
      <div className="form-wrapper">
        <h2 className="hero-title">
          Join <span className="gradient-text">VirtualIR</span>
        </h2>
        <p className="hero-subtitle">
          Start your journey with us and bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="feature-title">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="feature-title">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="feature-title">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="feature-title">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Create Account
          </button>
        </form>

        <div className="signin-link">
          <p>
            Already have an account?{' '}
            {/* You can create a /signin route later */}
            <Link to="/auth">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;