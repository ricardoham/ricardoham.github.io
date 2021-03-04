import React from 'react';
import Link from 'next/link';
import { StyledNavbar } from './styles';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link href="/">
        <StyledNavbar.Link>Home</StyledNavbar.Link>
      </Link>

      <Link href="/">
        <StyledNavbar.Link>My Graduation</StyledNavbar.Link>
      </Link>

      <Link href="/">
        <StyledNavbar.Link>My Projects</StyledNavbar.Link>
      </Link>

      <Link href="/">
        <StyledNavbar.Link>Today</StyledNavbar.Link>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
