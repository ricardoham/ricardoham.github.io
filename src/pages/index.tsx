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

export default function Home() {
  const parallaxRef = useRef<IParallax>();

  return (
    <>
      <Head>
        <title>Portfolio Ricardo</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Portfolio Ricardo Manoel" />
        <meta
          property="og:description"
          name="description"
          content="Personal portfolio of Fullstack Developer with background in React, Nodejs and Golang"
        />
        <meta
          property="og:image"
          content='/assets/profile-header.jpg'
        />
        <meta property="og:url" content="https://ricardoham.github.io/" />
        <link rel="icon" href='/favicon.ico' />
        <link
          href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Parallax
          ref={parallaxRef}
          pages={9}
          style={{
            backgroundImage: 'url(/assets/picture04.jpg)',
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
    </>
  );
}
