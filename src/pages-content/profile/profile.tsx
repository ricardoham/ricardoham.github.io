import React, { useState } from 'react';
import SpringSection from '../../components/section/spring/SpringSection';

const Profile = () => {
  const [open, set] = useState(true);
  return (
    <SpringSection open={open} onClick={() => set((state) => !state)}>
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
    </SpringSection>
  );
};

export default Profile;
