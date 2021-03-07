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
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/ricardo-manoel' },
    { icon: FaMedium, link: 'https://medium.com/@rdomanoel' },
    { icon: FaDev, link: 'https://dev.to/ricardoham' },
    { icon: FaGithub, link: 'https://github.com/ricardoham' },
    { icon: FaTwitter, link: 'https://twitter.com/ricardomanohell' },
  ];

  return (
    <IconContainer>
      {list.map((item, index) => (
        <Icon key={index} href={item.link} target="_blank">
          <item.icon />
        </Icon>
      ))}
    </IconContainer>
  );
};

export default SocialIcons;
