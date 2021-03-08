import React from 'react';
import SocialIcons from '../social-icons/SocialIcons';
import { StyledHeader, HeaderPhoto, HeaderContainer } from './styles';
import { prefix } from '../../utils/prefix';

const Banner = () => {
  return (
    <HeaderContainer>
      <HeaderPhoto src={`${prefix}/assets/profile.jpg`} />
      <StyledHeader>
        <StyledHeader.Text>I am Ricardo Manoel</StyledHeader.Text>
        <h3>Welcome to my portfolio</h3>
      </StyledHeader>
      <SocialIcons />
    </HeaderContainer>
  );
};

export default Banner;
