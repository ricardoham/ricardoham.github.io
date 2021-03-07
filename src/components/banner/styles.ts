import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 40px;
  align-items: center;
  margin-top: 100px;
  height: 500px;
  justify-content: space-between;
  @media only screen and (max-width: 650px) {
    flex-flow: column;
    height: auto;
  }
`;

export const StyledHeader: any = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

StyledHeader.Nav = styled.div`
  margin-top: auto;
  margin-bottom: 12px;
  width: 100%;
`;

StyledHeader.Text = styled.h1`
  text-align: center;
`;

export const HeaderPhoto = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 4px;
`;
