import React, { useRef } from 'react';
import Head from 'next/head';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Banner from '../components/banner/Banner';
import SpringSection from '../components/section/spring/SpringSection';
import NavList from '../components/navlist/NavList';

export default function Home() {
  const springRef = useRef<IParallax>();

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

      <NavList />
      <Parallax ref={springRef} pages={3}>
        <ParallaxLayer offset={0} speed={1} factor={3}>
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1.2} factor={1.5}>
          <SpringSection>
            <article>
              <h2>About me</h2>
              <p>
                My name is Ricardo Tadeu Manoel Junior, I'm from Brazil I live
                on Campinas city, knows as Princesa do Oeste, the third most
                populous municipality in São Paulo state And consider one of
                biggest center of technology and research in Latin America.
              </p>
              <p>
                I graduate from University of Campinas - Unicamp in 2016 with a
                degree in Analysis and Software Development. In there I also
                performed a scientific study with the theme: Study of Failures
                on Virtual Machines in the Cloud Computing.
              </p>
            </article>
          </SpringSection>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#805E73' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />
      </Parallax>
    </>
  );
}
