import React from 'react';
import './Header.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="title">LA TAZA</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#signin" className="auth-link"><FaSignInAlt /> Sign In</a></li>
          <li><a href="#signup" className="auth-link"><FaUserPlus /> Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;







