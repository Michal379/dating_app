import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="navbarContainer">
        <span className="logo">michayibooking</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navItems">
            <div className={`nav-item ${location.pathname === '/Home' ? 'active' : ''}`}>
              <Link to="/" className="navButton">
                Home
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/hotels' ? 'active' : ''}`}>
              <Link to="/online" className="navButton">
                Online
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
              <Link to="/matches" className="navButton">
                Matches
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
              <Link to="/search" className="navButton">
                Search
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/BookingDetailsPage' ? 'active' : ''}`}>
              <Link to="/messages" className="navButton">
                Messages
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/booked' ? 'active' : ''}`}>
              <Link to="/activity" className="navButton">
                Activity
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
              <Link to="/sign up" className="navButton">
                Sign Up
              </Link>
            </div>
            <div className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}>
              <Link to="/admin" className="navButton">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
