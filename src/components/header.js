import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="header">
    <span className="header-name">Ricardo T. Manoel Junior</span>
    <span className="header-portfolio">Portfolio</span>
    <nav className="navbar">
      <NavLink className="navbar__text" to="/">Profile</NavLink>
      <NavLink className="navbar__text" to="/knowledge">Knowledge</NavLink>
      <NavLink className="navbar__text" to="/resume">Resume</NavLink>
      <NavLink className="navbar__text" to="/projects">Projects</NavLink>
      <NavLink className="navbar__text" to="/contact">Contact</NavLink>
    </nav>
  </div>
)

export default Navbar;
