import React from 'react';
import { useTrail, animated } from 'react-spring';
import { StyledArticle } from './styles';

const SpringSection = ({ children, ...props }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    height: 100,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <section>
      <StyledArticle>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
            {...props}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </StyledArticle>
    </section>
  );
};

export default SpringSection;
