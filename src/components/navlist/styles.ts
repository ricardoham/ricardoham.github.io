import styled from 'styled-components';
import { animated } from 'react-spring';
import { FaBars } from 'react-icons/fa';

export const StyledNavList = styled(animated.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 8px;
  background: white;
  border-radius: 50px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  top: 80%;
  right: 10%;
  @media only screen and (max-width: 650px) {
    right: 10%;
  }
`;

export const Item = styled(animated.div)`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  margin-bottom: 12px;
  padding: 8px;
  vertical-align: middle;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  z-index: 100;
  will-change: transform, opacity;
`;

export const NavIcon = styled(FaBars)`
  align-self: center;
  font-size: 2rem;
  margin-top: 4px;
`;
