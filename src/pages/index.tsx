import React, { useRef } from 'react';
import Head from 'next/head';
import Banner from 'components/banner/Banner';
import Profile from 'components/pages-content/profile/Profile';
import Graduation from 'components/pages-content/graduation/Graduation';
import WorkExp from 'components/pages-content/workexp/WorkExp';
import Skills from 'components/pages-content/skills/Skills';
import Projects from 'components/pages-content/projects/Projects';
import Footer from 'components/footer/Footer';
import { prefix } from 'utils/prefix';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Ricardo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
            <Banner />
            <Profile />
            <Graduation />
            <WorkExp />
            <Skills />
            <Projects />
            <Footer />
      </div>
    </>
  );
}
