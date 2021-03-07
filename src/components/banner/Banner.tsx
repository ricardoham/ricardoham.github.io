import React from 'react';
import Image from '../image/Image';
import SocialIcons from '../social-icons/SocialIcons';
import { StyledHeader, HeaderPhoto, HeaderContainer } from './styles';

const Banner = () => {
  return (
    <HeaderContainer>
      <HeaderPhoto src="/assets/profile.jpg" />
      <StyledHeader>
        <StyledHeader.Text>I am Ricardo Manoel</StyledHeader.Text>
        <h3>Welcome to my portfolio</h3>
      </StyledHeader>
      <SocialIcons />
    </HeaderContainer>
  );
};

export default Banner;
