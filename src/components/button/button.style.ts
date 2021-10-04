import styled from 'styled-components';

interface ContainerProps {
  width: number,
  height?: number,
  bgColor: string,
  color: string,
  hoverBgColor: string,
  hoverColor: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${(props) => props.width}px;
  width: 100%;
  height: ${(props) => props.height || 48}px;
  background-color: #${(props) => props.bgColor};
  border-radius: 24px;
  font-family: Spartan,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #${(props) => props.color};
  
  &:hover {
    cursor: pointer;
    background-color: #${(props) => props.hoverBgColor};
    color: #${(props) => props.hoverColor};
  }
`;
