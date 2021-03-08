import React from 'react';
import { prefix } from 'utils/prefix';
import ProgressBar from 'components/progress-bar/ProgressBar';
import { Container, SkillsImg, SkillsTextFE, SkillsTextTitle } from './styles';

const Skills = () => {
  return (
    <Container>
      <h2>Skills</h2>
      <Container.Skills>
        <Container.Bars>
          <SkillsTextTitle>Front-End</SkillsTextTitle>
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
          <SkillsTextTitle>Back-End</SkillsTextTitle>
          <ProgressBar percentage="60%" label="NodeJS" />
          <ProgressBar percentage="65%" label="GoLang" />
          <ProgressBar percentage="40%" label="Java" />
          <ProgressBar percentage="50%" label="MongoDB" />
        </Container.Bars>
        <SkillsImg src={`${prefix}/assets/gifs/node.webp`} />
      </Container.Skills>
      <Container.Skills style={{ display: 'flex' }}>
        <Container.Bars>
          <SkillsTextTitle>Additional</SkillsTextTitle>
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
