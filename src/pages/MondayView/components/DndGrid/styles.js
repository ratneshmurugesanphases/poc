import styled, { keyframes } from "styled-components";

const fade = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`;

export const Table = styled.table`
  border-collapse: collapse;
  animation: ${fade} 500ms;
`;

export const StyledTh = styled.th`
  white-space: nowrap;
  color: #716f88;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: middle;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  border-left: ${({ dragOver }) => dragOver && "5px solid red"};
`;


export const StyledCell = styled("td")`
  font-size: 12px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: center;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: lowercase;
  border-left: ${({ dragOver }) => dragOver && "5px solid red"};

  &:hover {
      background-color: grey;
  }
`;

export const StyledRow = styled("tr")`
  font-size: 12px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: center;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: lowercase;
  border-left: ${({ dragOver }) => dragOver && "5px solid red"};

  &:hover {
      background-color: palegreen;
  }
`;

