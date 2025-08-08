import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      // Redirect or update UI accordingly
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', color: 'white' }}>
      <div style={{ width: '350px' }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '8px', width: '300px' }}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Password:</label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '8px', width: '300px' }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#ff5722', color: 'white', border: 'none', borderRadius: '5px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;