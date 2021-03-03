import { useSpring, animated } from 'react-spring';

const SpringSection = ({ children }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div style={props} className="span-test">
      {children}
    </animated.div>
  )
}

export default SpringSection
