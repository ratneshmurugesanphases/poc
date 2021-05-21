import styled from "styled-components";

export const StyledDateTimeInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 20px;
  align-items: center;
  justify-items: center;
  // margin: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 5px;

  & .date-time-start, .date-time-end {
    width: 350px;
  }

  [role="alert"] {
    grid-column: 2;
    justify-self: end;
  }
`;
