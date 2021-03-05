import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

export const StyleImg = styled(Image)<ImageProps>`
  z-index: -1;
`;

export const Wrapper = styled.div`
  position: fixed;
  height: 600px;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
