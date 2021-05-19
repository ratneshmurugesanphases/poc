import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledGrid = styled.div`
  animation: ${fade} 500ms;
`;

export const StyledGridHeaderRow = styled.span`
  padding: 5px;
  display: grid;
  grid-template-columns: ${({ colLength }) => `repeat(${colLength}, 1fr)`};
  outline: ${({ dragOver }) => dragOver && "2px solid red"};
`;

export const StyledGridHeader = styled.span`
  font-size: 12px;
  padding: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-content: end;
  outline: 1px solid black;
  height: 35px;
  z-index: 1;
  outline: ${({ dragOver }) => dragOver && "2px solid red"};

  input {
    border: none;
    text-overflow: ellipsis;
  }

  &:hover {
    input {
      border-radius: 4px;
      border: 1px solid #0085ff;
    }
  }
`;

export const StyledGridHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 20px 60px 15px 15px;
  justify-content: space-around;
  align-items: center;
  min-width: 150px;
`;

export const StyledGridBodyRow = styled.div`
  font-size: 12px;
  padding: 5px;
  display: grid;
  grid-template-columns: ${({ colLength }) => `repeat(${colLength}, 1fr)`};
  outline: ${({ dragOver }) => dragOver && "2px solid red"};

  &:hover {
    background-color: white;
  }
`;
