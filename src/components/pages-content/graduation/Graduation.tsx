import React from 'react';
import { prefix } from 'utils/prefix';
import Section from 'components/section/section/Section';

const Graduation = () => {
  return (
    <Section img={`${prefix}/assets/gifs/astronaut.webp`}>
      <h2>Graduation</h2>
      <p>
        I graduate from University of Campinas - Unicamp in 2016 with a degree
        in Analysis and Software Development. In there I also performed a
        scientific study with the theme: Study of Failures on Virtual Machines
        in the Cloud Computing.
      </p>
      <p>
        I was a volunteer at college(Unicamp), where I've instructed students
        from High Schools about the graduation of Analysis and System
        Development and the importance of software development in Brazil with
        examples and demonstration applications.
      </p>
    </Section>
  );
};

export default Graduation;
