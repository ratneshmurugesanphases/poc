import React from "react";
import Collapse from "@material-ui/core/Collapse";
import EditableTextField from "atoms/EditableTextField";

import styled from "styled-components";

const setGridTemplateByCollapseState = ({ collapse }) => {
  console.log("styled.css", collapse);
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

const StyledGroupCollapser = styled.div`
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
    // color: red;
  }

  .group-second-row {
    grid-area: group-second-row;
    background-color: cyan;
  }

  .group-collapser {
    grid-area: group-collapser;
  }
`;

const StyledTotalText = styled.span`
  color: purple;
  font-weight: bold;
  width: 100px;
  float: right;
  display: ${({ collapse }) => (collapse ? "none" : "block")};
`;

export default function GroupCollapser({
  children,
  // mainarea,
  totalItems = 99,
  isGridOpen = false,
  postKey,
  postKey: groupCollapserKey,
  groupColor,
  subarea,
}) {
  const [collapse, setCollapse] = React.useState(isGridOpen);
  // console.log(children);

  const handleCollapseClick = () => setCollapse(!collapse);
  return (
    <StyledGroupCollapser
      id={`groupCollapser${groupCollapserKey}`}
      key={`groupCollapser${groupCollapserKey}`}
      collapse={collapse}
    >
      {/* <div className="group-first-row"> */}
      <button onClick={handleCollapseClick} className="group-toggle-button">
        {collapse ? "LESS" : "MORE"}
      </button>
      <EditableTextField
        className="editable-text-field"
        editableInputValue={subarea}
        autoSize={true}
      />
      <StyledTotalText
        collapse={collapse}
        className="group-total-items"
      >{`${totalItems} items`}</StyledTotalText>
      {/* </div> */}
      {/* <span className="group-second-row"> */}
      <Collapse
        timeout={{
          appear: 0,
          enter: 0,
          exit: 0,
        }}
        unmountOnExit
        in={collapse}
        key={`groupCollapser${groupCollapserKey}`}
        className="group-collapser"
        collapsedHeight="50px"
        style={{ top: "0px", position: "relative" }}
      >
        {children({ groupColor, postObj: { postKey, subarea, groupColor } })}
      </Collapse>
      {/* </span> */}
    </StyledGroupCollapser>
  );
}
