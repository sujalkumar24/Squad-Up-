import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from localStorage or default to true (dark mode default)
    const saved = localStorage.getItem('darkMode');
    if (saved === null) {
      // Default to dark mode enabled
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      return true;
    }
    return saved === 'true' ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Squad Up</Link>
        <ul className="nav-menu">
          <li><NavLink to="/" className="nav-links">Home</NavLink></li>
          <li><NavLink to="/dashboard" className="nav-links">Dashboard</NavLink></li>
          <li><NavLink to="/explore" className="nav-links">Explore</NavLink></li>
          <li><NavLink to="/blog" className="nav-links">Blog</NavLink></li>
        </ul>
        <div className="nav-auth">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/signup" className="btn btn-signup">Signup</Link>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
