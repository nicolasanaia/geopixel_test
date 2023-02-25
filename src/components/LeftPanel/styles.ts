import styled from "styled-components";

export const LeftPanelContainer = styled.div`
  display: grid;
  grid-template-rows: 50vh 50vh;
`;

export const UpperPanel = styled.div`
  border-bottom: 1px solid #ffffff;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LowerPanel = styled.div`
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
`;
