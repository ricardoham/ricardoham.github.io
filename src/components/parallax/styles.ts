import styled from 'styled-components';
import { ParallaxLayer } from '@react-spring/parallax';

interface StyledProps {
  picture?: string;
}

export const StyledParallax = styled(ParallaxLayer)<StyledProps>`
  background-image: url(${(props) => `/assets/${props.picture}`});
  background-size: cover;
  min-height: 500px;
`;

export const Image = styled.img`
  height: 70vh;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;
