import styled from "styled-components";
import { BallProps } from "./interfaces";

export const Container = styled.div<BallProps>`
  display: flex;
  background: black;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 0;
  background: radial-gradient(circle at 1rem 1rem, #5cabff, #000);
  position: absolute;
  margin-left: ${props => props.margin}px;

  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};

  transform: translate(-50%, -50%);

  transition: all 0.5s ease-out;
  cursor: pointer;
`;