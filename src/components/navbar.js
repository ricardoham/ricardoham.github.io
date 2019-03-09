import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
      <NavLink className="navbar__text" to="/">Profile</NavLink>
      <NavLink className="navbar__text" to="/knowledge">Knowledge</NavLink>
      <NavLink className="navbar__text" to="/resume">Resume</NavLink>
      <NavLink className="navbar__text" to="/projects">Projects</NavLink>
      <NavLink className="navbar__text" to="/contact">Contact</NavLink>
    </nav>
)

export default Navbar;
