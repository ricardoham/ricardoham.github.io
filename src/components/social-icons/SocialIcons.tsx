import React from 'react';
import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from 'react-icons/fa';
import { Icon, IconContainer } from './styles';

const SocialIcons = () => {
  const list = [
    { icon: FaLinkedin, link: 'www.linkedin.com/in/ricardo-manoel' },
    { icon: FaMedium, link: 'https://medium.com/@rdomanoel' },
    { icon: FaDev, link: 'https://dev.to/ricardoham' },
    { icon: FaGithub, link: 'https://github.com/ricardoham' },
    { icon: FaTwitter, link: 'www.linkedin.com/in/ricardo-manoel' },
  ];

  return (
    <IconContainer>
      {list.map((item, index) => (
        <Icon href={item.link}>
          <item.icon />
        </Icon>
      ))}
    </IconContainer>
  );
};

export default SocialIcons;
