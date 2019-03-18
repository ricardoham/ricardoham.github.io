import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
      <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">Profile</NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/knowledge">Knowledge</NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/resume">Resume</NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/projects">Projects</NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/contact">Contact</NavLink>
    </nav>
)

export default Navbar;
