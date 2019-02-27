import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="header">
    <nav className="header header__text">
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/knowledge">Knowledge</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </div>
)

export default Navbar;
