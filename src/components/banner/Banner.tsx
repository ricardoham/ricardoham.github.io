import React from 'react';
import { StyledHeader } from './styles';

interface Props {
  children?: JSX.Element;
}

const Banner = ({ children }: Props) => {
  return (
    <StyledHeader>
      <h1>Welcome to my Portfolio</h1>
      {children}
    </StyledHeader>
  );
};

export default Banner;
