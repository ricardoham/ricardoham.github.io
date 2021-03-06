import React from 'react';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import { Container } from './styles';

const Skills = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <h2>Front-End</h2>
      <ProgressBar percentage="90%" label="React" />
      <ProgressBar percentage="70%" label="Angular" />
      <ProgressBar percentage="70%" label="Vue" />
      <ProgressBar percentage="70%" label="React-Native" />
      <ProgressBar percentage="50%" label="Flutter" />
      <ProgressBar percentage="80%" label="TypeScript" />
      <h2>Back-End</h2>
      <ProgressBar percentage="60%" label="NodeJS" />
      <ProgressBar percentage="65%" label="GoLang" />
      <ProgressBar percentage="40%" label="Java" />
      <ProgressBar percentage="50%" label="MongoDB" />
      <h2>Additional</h2>
      <ProgressBar percentage="70%" label="UX/UI" />
      <ProgressBar percentage="60%" label="Python" />
      <ProgressBar percentage="40%" label="Unit3D" />
    </Container>
  );
};

export default Skills;
