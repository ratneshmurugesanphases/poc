import styled from "styled-components";

export const StyledRichText = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: start;
  // margin: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 5px;

  & > div {
    width: 350px;
  }
`;
