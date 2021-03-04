import React, { useRef } from 'react';
import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Navbar from '../components/navbar/Navbar';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import SpringSection from '../components/section/spring/SpringSection';

export default function Home() {
  const springRef = useRef<IParallax>();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Parallax ref={springRef} pages={3}>
        <ParallaxLayer offset={0} speed={1} factor={2}>
          <Banner />
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
// background-image: url(/assets/picture01.jpg);
// {/* <Head>
//   <title>Create Next App</title>
//   <link rel="icon" href="/favicon.ico" />
// </Head>
// <main className={styles.main}>
//   <h1 className={styles.title}>
//     Welcome to my Portfolio!
//   </h1>

//   <p className={styles.description}>
//     My name is Ricardo Tadeu Manoel Junior,
//     I'm from Brazil I live on Campinas city, knows as Princesa do Oeste, the third most populous municipality in São Paulo state
//     And consider one of biggest center of technology and research in Latin America.
//   </p>

//   <p className={styles.description}>
//     I graduate from University of Campinas - Unicamp in 2016 with a degree in Analysis and Software Development.
//     In there I also performed a scientific study with the theme: Study of Failures on Virtual Machines in the Cloud Computing.
//   </p>
//   <span className={styles.footer}>Test</span>
// </main> */}
// <SpringSection>
//   <span>TEST</span>
// </SpringSection>
