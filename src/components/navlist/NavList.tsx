import React, { useEffect, useRef, useState } from 'react';
import { StyledNavList, Item, NavIcon } from './styles';
import { config, useChain, useSpring, useTransition } from 'react-spring';
import { list } from './list';

interface Props {
  onParallaxPosition: (pos: number) => void;
}

const NavList = ({ onParallaxPosition }: Props) => {
  const springRef = useRef();
  const navRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const {
    borderRadius,
    top,
    heightSize,
    widthSize,
    opacity,
    ...rest
  } = useSpring<any>({
    ref: springRef,
    config: config.stiff,
    from: { heightSize: '40px', widthSize: '40px', background: '#1576f3' },
    to: {
      heightSize: open ? '300px' : '40px',
      widthSize: open ? '150px' : '40px',
      borderRadius: open ? '4px' : '50px',
      background: open ? 'rgba(24, 24, 24, 0.605)' : '#1576f3',
      top: open ? '500px' : '720px',
    },
  });
  const transRef = useRef();
  const transitions = useTransition(open ? list : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / list.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  const handleOpen = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOpen);

    return () => {
      document.removeEventListener('click', handleOpen);
    };
  });

  return (
    <div onClick={() => setOpen(!open)}>
      <StyledNavList
        ref={navRef}
        style={{
          ...rest,
          width: widthSize,
          height: heightSize,
          borderRadius: borderRadius,
          top: top,
        }}
      >
        <NavIcon />
        {transitions.map(({ item, key, props }) => (
          <Item
            key={key}
            style={{ ...props }}
            onClick={() => onParallaxPosition(item.offset)}
          >
            <span>{item.name}</span>
          </Item>
        ))}
      </StyledNavList>
    </div>
  );
};

export default NavList;
