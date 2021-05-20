import React from "react";
import styled from "styled-components";

const StyledGridCell = styled.span`
  font-size: 14px;
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

export default function GridCell({ value, dragOverColumn, cols, row, idx }) {
  // console.log({ row, cols, idx });
  return (
    <StyledGridCell
      className="cell"
      key={value.text}
      dragOver={cols[idx] === dragOverColumn}
      colLength={cols.length}
    >
      {row[cols[idx]].text}
    </StyledGridCell>
  );
}
