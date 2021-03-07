import React from 'react';
import { ImageProps } from 'next/image';
import { StyleImg, Wrapper } from './styles';

interface Props {
  src: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  objectFit?: ImageProps['objectFit'];
  width?: number;
  height?: number;
  quality?: number;
  sizes?: string;
}

const Image = ({
  src,
  width,
  height,
  layout,
  objectFit,
  quality,
  sizes,
  ...rest
}: Props) => (
  <Wrapper>
    <StyleImg
      src={src}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      quality={quality}
      sizes={sizes}
      {...rest}
    />
  </Wrapper>
);

export default Image;
