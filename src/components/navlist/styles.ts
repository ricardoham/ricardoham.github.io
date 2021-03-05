import styled from 'styled-components';
import { animated } from 'react-spring';

export const StyledNavList = styled(animated.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 8px;
  background: white;
  border-radius: 50px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  top: 720px;
  right: 70px;
`;

export const Item = styled(animated.div)`
  margin-bottom: 12px;
  padding: 8px;
  vertical-align: middle;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 100;
  will-change: transform, opacity;
`;
