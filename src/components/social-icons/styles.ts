import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  align-self: flex-end;
  @media only screen and (max-width: 650px) {
    align-self: auto;
  }
`;

export const Icon: any = styled.a`
  margin-right: 10px;
  font-size: 3rem;
  cursor: pointer;
`;
