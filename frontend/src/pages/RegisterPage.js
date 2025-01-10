// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      setSuccessMsg(res.data.message || 'User registered successfully!');
    } catch (error) {
      console.error('Registration error:', error);
      setError(
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      
      <form onSubmit={handleSubmit} className="mt-4" style={{maxWidth: '400px'}}>
        <div className="mb-3">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control"
            value={formData.name}
            onChange={handleChange} 
            required 
          />
        </div>
        
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
        
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      
      {/* Show success or error messages */}
      {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default RegisterPage;
