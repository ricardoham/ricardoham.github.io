import React, { useRef } from 'react';
import Head from 'next/head';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Banner from '../components/banner/Banner';
import NavList from '../components/navlist/NavList';
import Profile from '../pages-content/profile/Profile';
import Graduation from '../pages-content/graduation/Graduation';
import { StyledLayer } from './styles';

export default function Home() {
  const parallaxRef = useRef<IParallax>();

  const parallaxPosition = (pos: number) => {
    parallaxRef.current.scrollTo(pos);
  };

  return (
    <>
      <Head>
        <title>Portfolio Ricardo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavList onParallaxPosition={parallaxPosition} />
      <Parallax ref={parallaxRef} pages={3}>
        <StyledLayer offset={0} speed={0} factor={3} />
        <ParallaxLayer offset={0} speed={1}>
          <Banner />
        </ParallaxLayer>
        <StyledLayer offset={0.9} speed={1.2}>
          <Profile />
        </StyledLayer>
        <ParallaxLayer offset={1} speed={1.2}>
          {/* <StyleImg src="/assets/picture01.jpg" layout="fill" /> */}
          <Graduation />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <footer>FOOTER</footer>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
