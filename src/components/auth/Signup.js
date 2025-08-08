import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('/api/auth/register', { username, email, password });
      setSuccess('Registration successful. You can now login.');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', color: 'white' }}>
      <div style={{ width: '350px' }}>
        <h1 style={{ textAlign: 'center' }}>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label><br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ padding: '8px', width: '300px' }}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
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
          {success && <p style={{ color: 'lightgreen' }}>{success}</p>}
          <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#ff5722', color: 'white', border: 'none', borderRadius: '5px' }}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
