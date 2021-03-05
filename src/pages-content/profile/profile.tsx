import React from 'react';
import Section from '../../components/section/section/Section';
import SpringSection from '../../components/section/spring/SpringSection';
import Image from 'next/image';

const Profile = () => {
  return (
    <Section>
      {/* <Image src="/assets/profile.jpg" width={500} height={500} /> */}

      <article>
        <h2>About me</h2>
        <p>
          My name is Ricardo Tadeu Manoel Junior, I'm from Brazil I live on
          Campinas city, knows as Princesa do Oeste, the third most populous
          municipality in São Paulo state And consider one of biggest center of
          technology and research in Latin America.
        </p>
        <p>
          I graduate from University of Campinas - Unicamp in 2016 with a degree
          in Analysis and Software Development. In there I also performed a
          scientific study with the theme: Study of Failures on Virtual Machines
          in the Cloud Computing.
        </p>
      </article>
    </Section>
  );
};

export default Profile;
