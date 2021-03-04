import { useSpring, animated } from 'react-spring';

const SpringSection = ({ children }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.section style={props} className="span-test">
      {children}
    </animated.section>
  );
};

export default SpringSection;
