import styled from "styled-components";

const setGridTemplateByCollapseState = ({ collapse }) => {
  // console.log("styled.css", collapse);
  if (collapse) {
    return `
    grid-template-rows: 1fr;
    grid-template-columns: 50px 1fr;
    grid-template-areas: "group-toggle-button group-collapser";
    align-items: start;

    .editable-text-field {
      margin: 15px 0px 0px 10px;
    }
    `;
  }
  return `
  grid-template-rows: 1fr;
  grid-template-columns: 50px 120px 1fr;
  grid-template-areas: "group-toggle-button editable-text-field group-total-items";
  justify-items: end;
  `;
};

export const StyledGroupCollapser = styled.div`
  margin: 40px 0px 0px 0px;
  display: grid;
  ${setGridTemplateByCollapseState}

  .group-toggle-button {
    grid-area: group-toggle-button;
    width: 50px;
    position: relative;
  }

  .editable-text-field {
    grid-area: editable-text-field;
    grid-column: 2;
    grid-row: 1;
    z-index: 2;
    left: 0px;
    top: 0px;
    position: relative;
    background-color: palegreen;
    width: 100px;
  }

  .group-total-items {
    grid-area: group-total-items;
  }

  .group-collapser {
    grid-area: group-collapser;
  }
`;

export const StyledTotalText = styled.span`
  color: purple;
  font-weight: bold;
  width: 100px;
  float: right;
  display: ${({ collapse }) => (collapse ? "none" : "block")};
`;