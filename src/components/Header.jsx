import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1>MyCompany</h1>
        </Link>
        <nav className="header-nav">
          <ul className="header-menu">
            <li>
              <Link to="/" className="header-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="header-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="header-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
