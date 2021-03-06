import styled, { keyframes } from 'styled-components';

interface StyledProps {
  percentage: string;
}

const colorAnimation = keyframes`
  
	0% {
		background-color: #ee6055;
	}
	25% {
		background-color: #60d394;
	}
	50% {
		background-color: #aaf683;
	}
	75% {
		background-color: #ffd97d;
	}
	100% {
		background-color: #ff9b85;
	}
`;

export const Container = styled.div`
  margin: 10px 16px;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledBar: any = styled.div`
  position: relative;
  border-radius: 4px;
  width: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  height: 26px;
  background: #fff;
`;

StyledBar.Progress = styled.span<StyledProps>`
  display: block;
  width: ${(props) => props.percentage};
  height: 100%;
  border-radius: 4px;
  animation-name: ${colorAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;
