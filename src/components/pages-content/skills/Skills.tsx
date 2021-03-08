import React from 'react';
import { prefix } from 'utils/prefix';
import ProgressBar from 'components/progress-bar/ProgressBar';
import { Container, SkillsImg, SkillsTextFE } from './styles';

const Skills = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <Container.Skills>
        <Container.Bars>
          <SkillsTextFE>Front-End</SkillsTextFE>
          <ProgressBar percentage="90%" label="React" />
          <ProgressBar percentage="70%" label="Angular" />
          <ProgressBar percentage="70%" label="Vue" />
          <ProgressBar percentage="75%" label="React-Native" />
          <ProgressBar percentage="50%" label="Flutter" />
          <ProgressBar percentage="80%" label="TypeScript" />
        </Container.Bars>
        <SkillsImg src={`${prefix}/assets/gifs/react.webp`} />
      </Container.Skills>
      <Container.Skills style={{ display: 'flex' }}>
        <Container.Bars>
          <h2>Back-End</h2>
          <ProgressBar percentage="60%" label="NodeJS" />
          <ProgressBar percentage="65%" label="GoLang" />
          <ProgressBar percentage="40%" label="Java" />
          <ProgressBar percentage="50%" label="MongoDB" />
        </Container.Bars>
        <SkillsImg src={`${prefix}/assets/gifs/node.webp`} />
      </Container.Skills>
      <Container.Skills style={{ display: 'flex' }}>
        <Container.Bars>
          <h2>Additional</h2>
          <ProgressBar percentage="70%" label="UX/UI" />
          <ProgressBar percentage="60%" label="Python" />
          <ProgressBar percentage="40%" label="Unit3D" />
        </Container.Bars>
        <SkillsImg src={`${prefix}/assets/gifs/rocket.webp`} />
      </Container.Skills>
    </Container>
  );
};

export default Skills;
