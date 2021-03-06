import React from 'react';
import Image from '../image/Image';
import { StyledHeader } from './styles';

const Banner = () => {
  return (
    <StyledHeader>
      <h1>I am Ricardo Manoel</h1>
      <h3>Welcome to my portfolio</h3>
      <Image
        src="/assets/picture05.jpg"
        layout="fill"
        objectFit="fill"
        quality={100}
      />
    </StyledHeader>
  );
};

export default Banner;
