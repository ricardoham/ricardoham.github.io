import React from 'react';
import { StyledSection, StyledArticle, StyledImg } from './styles';

interface Props {
  children: any;
  img?: string;
}

const Section = ({ children, img }: Props) => {
  return (
    <StyledSection>
      <StyledArticle>{children}</StyledArticle>
      {img && <StyledImg src={img} />}
    </StyledSection>
  );
};

export default Section;
