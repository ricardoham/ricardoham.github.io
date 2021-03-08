import styled from 'styled-components';

export const Container: any = styled.section`
  margin: 0 16px;
`;

Container.Skills = styled.div`
  display: flex;
  @media only screen and (max-width: 650px) {
    flex-flow: column;
  }
`;

Container.Bars = styled.div`
  width: 80%;
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const SkillsImg = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
  @media only screen and (max-width: 650px) {
    margin: 8px 0px 0px;
    width: 100px;
    height: 100px;
  }
`;

export const SkillsTextTitle = styled.h3`
  @media only screen and (max-width: 650px) {
    margin-top: 0px;
  }
`;

export const SkillsTextFE = styled.h2`
  margin-top: 0px;
`;
