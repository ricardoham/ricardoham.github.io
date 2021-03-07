import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	100% {
		transform: rotate(2turn);
	}
`;

export const colorAnimation = keyframes`
  
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
  border-radius: 4px;
  position: relative;
`;

export const Column = styled.div`
  width: 400px;
  padding: 0 16px;
  margin-bottom: 24px;
  font-size: 1.5rem;
`;

export const Item: any = styled.span`
  display: block;
  padding: 8px 0;
`;

export const Project: any = styled.div`
  display: flex;
  align-items: center;
`;

Project.Name = styled.span`
  font-weight: 700;
  margin-right: 8px;
  word-break: break-word;
`;

Project.Repo = styled.a`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-right: 8px;
  font-weight: 700;
`;
