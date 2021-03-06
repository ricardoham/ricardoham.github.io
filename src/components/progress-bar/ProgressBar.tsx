import React from 'react';
import { Container, Label, StyledBar } from './styles';

interface Props {
  label: string;
  percentage: string;
}

const ProgressBar = ({ label, percentage }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledBar>
        <StyledBar.Progress percentage={percentage} />;
      </StyledBar>
    </Container>
  );
};

export default ProgressBar;
