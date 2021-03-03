import React, { useRef } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

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
    </Parallax>
  );
};

export default SpringParallax;
