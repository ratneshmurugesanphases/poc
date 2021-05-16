import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledGrid = styled.div`
  border-collapse: collapse;
  animation: ${fade} 500ms;
`;

export const StyledGridHeaderRow = styled.span`
  padding: 5px;
  display: grid;
  grid-template-columns: ${({ colLength }) => `repeat(${colLength}, 1fr)`};
  outline: 1px solid black;
  outline: ${({ dragOver }) => dragOver && "2px solid red"};
`;

export const StyledGridHeader = styled.span`
  font-size: 12px;
  padding: 5px;
  min-width: 150px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 20% 50% 15% 15%;
  justify-items: center;
  outline: 1px solid black;
  height: 35px;
  outline: ${({ dragOver }) => dragOver && "2px solid red"};

  input {
    border: none;
    width: 45px;
    text-overflow: ellipsis;
  }

  &:hover {
    input {
      border-radius: 4px;
      border: 1px solid #0085ff;
      width: 45px;
    }
  }
`;

export const StyledGridBodyRow = styled.div`
  font-size: 12px;
  padding: 5px;
  display: grid;
  outline: 1px solid black;
  grid-template-columns: ${({ colLength }) => `repeat(${colLength}, 1fr)`};
  outline: ${({ dragOver }) => dragOver && "2px solid red"};

  &:hover {
    background-color: palegreen;
  }
`;
