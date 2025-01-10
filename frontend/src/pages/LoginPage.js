// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      
      // Example: you might store a JWT or user data
      // localStorage.setItem('token', res.data.token);
      
      setSuccessMsg('Logged in successfully!');
      console.log('Login response:', res.data);
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      
      <form onSubmit={handleSubmit} style={{maxWidth: '400px'}}>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            className="form-control"
            value={formData.email}
            onChange={handleChange} 
            required
          />
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            className="form-control"
            value={formData.password}
            onChange={handleChange} 
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      
      {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default LoginPage;
