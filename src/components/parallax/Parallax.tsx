import React, { useRef } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { StyledParallax, Image } from './styles';

const SpringParallax = () => {
  const springRef = useRef<IParallax>();

  return (
    <Parallax ref={springRef} pages={3}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: '#805E73' }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: '#87BCDE' }}
      />

      {/* <StyledParallax offset={0} speed={1} factor={3} picture="picture01.jpg" /> */}

      <ParallaxLayer offset={0} speed={1} factor={3}>
        <Image src="/assets/picture02.jpg" />
      </ParallaxLayer>
    </Parallax>
  );
};

export default SpringParallax;
