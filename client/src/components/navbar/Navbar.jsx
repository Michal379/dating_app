import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          dating-app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/online" className="nav-link">
                Online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/matches" className="nav-link">
                Matches
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/messages" className="nav-link">
                Messages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/activity" className="nav-link">
                Activity
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
