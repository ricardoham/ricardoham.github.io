import React, { useRef, useState } from 'react';
import { StyledNavList, Item } from './styles';
import { config, useChain, useSpring, useTransition } from 'react-spring';

const NavList = () => {
  const data = [
    {
      name: 'About Me',
      css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
      height: 20,
    },
    {
      name: 'My Graduation',
      css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      height: 20,
    },
  ];
  const springRef = useRef();
  const [open, set] = useState(false);
  const { borderRadius, size, opacity, ...rest } = useSpring<any>({
    ref: springRef,
    config: config.stiff,
    from: { size: '40px', background: 'tomato' },
    to: {
      size: open ? '100%' : '40px',
      borderRadius: open ? '4px' : '50px',
      background: open ? 'white' : 'tomato',
    },
  });
  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <StyledNavList
      style={{ ...rest, width: size, height: size, borderRadius: borderRadius }}
      onClick={() => set((open) => !open)}
    >
      {transitions.map(({ item, key, props }) => (
        <Item key={key} style={{ ...props, background: item.css }}>
          <span>{item.name}</span>
        </Item>
      ))}
    </StyledNavList>
  );
};

export default NavList;
