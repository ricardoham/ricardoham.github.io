import React from 'react';
import Navbar from '../navbar/Navbar';
import { StyledHeader } from './styles';

const Banner = () => {
  return (
    <StyledHeader>
      <h1>I am Ricardo Manoel</h1>
      <h3>Welcome to my portfolio</h3>
      <StyledHeader.Nav>
        <Navbar />
      </StyledHeader.Nav>
    </StyledHeader>
  );
};

export default Banner;
