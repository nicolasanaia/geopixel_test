import styled from "styled-components";
import { BallProps } from "./interfaces";

export const Container = styled.div<BallProps>`
  display: flex;
  background: black;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin: 0;
  background: radial-gradient(circle at 1rem 1rem, #5cabff, #000);
  position: absolute;

  left: ${(props) => `${props.x}%`};
  top: ${(props) => `${props.y}%`};

  transform: translate(-50%, -50%);

  transition: all 0.5s ease-out;
  cursor: pointer;
`;