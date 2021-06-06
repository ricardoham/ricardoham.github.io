import React, { useRef } from 'react';
import Head from 'next/head';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Banner from 'components/banner/Banner';
import Profile from 'components/pages-content/profile/Profile';
import Graduation from 'components/pages-content/graduation/Graduation';
import WorkExp from 'components/pages-content/workexp/WorkExp';
import Skills from 'components/pages-content/skills/Skills';
import Projects from 'components/pages-content/projects/Projects';
import Footer from 'components/footer/Footer';
import { prefix } from 'utils/prefix';

export default function Home() {
  const parallaxRef = useRef<IParallax>();

  console.log(prefix)

  return (
    <div>
      <Head>
        <title>Portfolio Ricardo</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div>
        <Parallax
          ref={parallaxRef}
          pages={9}
          style={{
            backgroundImage: `url(${prefix}/assets/picture04.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <ParallaxLayer offset={0} speed={0} />
          <ParallaxLayer offset={0} speed={1}>
            <Banner />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.3}>
            <Profile />
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
      </div>
    </div>
  );
}
