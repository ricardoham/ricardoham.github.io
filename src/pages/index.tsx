import React, { useRef } from 'react';
import Head from 'next/head';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Banner from '../components/banner/Banner';
import NavList from '../components/navlist/NavList';
// import Profile from '../pages-content/profile/Profile';
import Graduation from '../pages-content/graduation/Graduation';
import WorkExp from '../pages-content/workexp/WorkExp';
import Skills from '../pages-content/skills/Skills';
import Projects from '../pages-content/projects/Projects';
import Footer from '../components/footer/Footer';
import styles from '../styles/Parallax.module.css';

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
      <Parallax ref={parallaxRef} pages={9} className={styles.bgimg}>
        <ParallaxLayer offset={0} speed={0} />
        <ParallaxLayer offset={0} speed={1}>
          <Banner />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          {/* <Profile /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={2.18} speed={0.3}>
          <Graduation />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.3}>
          <WorkExp />
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={0.3}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer offset={6.4} speed={0.3}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={8.5} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
