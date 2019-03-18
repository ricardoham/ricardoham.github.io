import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
      <NavLink exact activeClassName="nav__link--active" className="navbar__text" to="/">Profile</NavLink>
      <NavLink activeClassName="nav__link--active" className="navbar__text" to="/knowledge">Knowledge</NavLink>
      <NavLink activeClassName="nav__link--active" className="navbar__text" to="/resume">Resume</NavLink>
      <NavLink activeClassName="nav__link--active" className="navbar__text" to="/projects">Projects</NavLink>
      <NavLink activeClassName="nav__link--active" className="navbar__text" to="/contact">Contact</NavLink>
    </nav>
)

export default Navbar;
