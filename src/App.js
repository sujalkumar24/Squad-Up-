import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Explore from './components/pages/Explore';
import Blog from './components/pages/Blog';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App dark-theme">
        <Navbar />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/dashboard" element=<Dashboard /> />
          <Route path="/explore" element=<Explore /> />
          <Route path="/blog" element=<Blog /> />
          <Route path="/login" element=<Login /> />
          <Route path="/signup" element=<Signup /> />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
