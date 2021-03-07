import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  padding: 0 16px;
  @media only screen and (max-width: 650px) {
    flex-flow: column;
    margin-bottom: 50px;
  }
`;

export const StyledArticle = styled.article``;

export const StyledImg = styled.img`
  height: 350px;
  align-self: center;
  @media only screen and (max-width: 650px) {
    width: 300px;
    height: 150px;
  }
`;
