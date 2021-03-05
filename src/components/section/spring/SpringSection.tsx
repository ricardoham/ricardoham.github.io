import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { StyledSection } from './styles';

const SpringSection = ({ open, children, ...props }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail<any>(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <StyledSection
          key={items[index]}
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
          {...props}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </StyledSection>
      ))}
    </>
  );
};

export default SpringSection;

// const props = useSpring({ opacity: 1, from: { opacity: 0 } });
// return (
//   <animated.section style={props} className="span-test">
//     {children}
//   </animated.section>
// );
