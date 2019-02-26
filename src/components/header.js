import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <NavLink to="/">Profile</NavLink>
      <NavLink>Knowledge</NavLink>
      <NavLink>Resume</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Contact</NavLink>
    </nav>
  </div>
)

export default Navbar;
