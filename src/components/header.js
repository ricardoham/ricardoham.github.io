import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="header">
    <nav className="header header__text">
      <NavLink className="header header__text" to="/">Profile</NavLink>
      <NavLink className="header header__text" to="/knowledge">Knowledge</NavLink>
      <NavLink className="header header__text" to="/resume">Resume</NavLink>
      <NavLink className="header header__text" to="/projects">Projects</NavLink>
      <NavLink className="header header__text" to="/contact">Contact</NavLink>
    </nav>
  </div>
)

export default Navbar;
