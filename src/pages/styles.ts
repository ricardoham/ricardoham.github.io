import styled from 'styled-components';
import { ParallaxLayer } from '@react-spring/parallax';

interface StyledProps {
  bgImage?: string;
}

export const StyledLayer = styled(ParallaxLayer)<StyledProps>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  will-change: transform;
`;
