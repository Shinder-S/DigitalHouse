import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pic/Keep travel DH logo.png'
import '../style/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
        <img src={logo} className="App-logo" alt="logo" />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/admin">AdminPanel</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;