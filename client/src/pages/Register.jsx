import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${window.location.origin}/api/v1/auth/register`, {
        name,
        email,
        password,
      });

      if (res) {
        console.log(res);
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container" style={{ minHeight: '90vh' }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Register;
