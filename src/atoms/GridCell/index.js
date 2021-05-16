import React from "react";
import styled from "styled-components";

const StyledGridCell = styled.span`
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

export default function GridCell({ value, dragOverCol, cols, row, idx }) {
  return (
    <StyledGridCell
      className="cell"
      key={value}
      dragOver={cols[idx] === dragOverCol}
      colLength={cols.length}
    >
      {row[cols[idx]]}
    </StyledGridCell>
  );
}
