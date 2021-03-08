import React from 'react';
import List from '../../list/List';
import Section from '../../section/section/Section';

const Projects = () => {
  return (
    <Section>
      <h2>Projects</h2>
      <p>
        I love to make code and then I created some projects to improve my
        skills or to learn something new. You can follow my project on Github
        below:
      </p>
      <List />
    </Section>
  );
};

export default Projects;
