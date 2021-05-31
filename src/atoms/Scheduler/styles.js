import styled, { keyframes, css } from "styled-components";

export const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const applyFade = () => css`
  animation: ${fade} 300ms;
  animation-fill-mode: forwards;
`;

export const StyledScheduler = styled.div`
  display: grid;
  grid-template-rows: 1fr 95vh;
  ${applyFade}
`;

export const StyledToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  z-index: 4;
  ${applyFade}
`;