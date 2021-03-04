import styled from 'styled-components';

export const StyledHeader: any = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/assets/picture03.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
`;

StyledHeader.Nav = styled.div`
  margin-top: auto;
  margin-bottom: 12px;
  width: 100%;
`;
