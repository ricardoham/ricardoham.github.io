import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="header">
      <NavLink className="header__text" to="/">Profile</NavLink>
      <NavLink className="header__text" to="/knowledge">Knowledge</NavLink>
      <NavLink className="header__text" to="/resume">Resume</NavLink>
      <NavLink className="header__text" to="/projects">Projects</NavLink>
      <NavLink className="header__text" to="/contact">Contact</NavLink>
    </nav>
  </div>
)

export default Navbar;
