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
  grid-template-columns: ${({colLength}) => `repeat(${colLength}, 1fr)`};
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
  grid-template-columns: 40px 65px 20px 25px;
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

  span:last-child > button {
    width: 20px;
  }

  // &:focus {
  //   input {
  //     border-radius: 4px;
  //     border: 1px solid #0085ff;
  //     width: 40px;
  //   }
  // }

  // & > button {
  //   position: absolute;
  //   // top: -18px;
  //   left: 50%;
  //   transform: translateX(-50%);
  // }

  // &:hover{
  //   span {
  //     display: block;
  //   }
  // }
`;

export const StyledGridHeaderMenuButton = styled.span`
  // display: none;
`;

export const StyledGridBodyRow = styled.div`
  font-size: 12px;
  padding: 5px;
  display: grid;
  outline: 1px solid black;
  grid-template-columns: ${({colLength}) => `repeat(${colLength}, 1fr)`};
  outline: ${({ dragOver }) => dragOver && "2px solid red"};

  &:hover {
      background-color: palegreen;
  }
`;


export const StyledGridCell = styled.span`
  font-size: 12px;
  padding: 5px;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 1px solid black;

  outline: ${({ dragOver }) => dragOver && "2px solid red"};

  &:hover {
      background-color: grey;
  }
`;


