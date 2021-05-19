import React from "react";
import EditableTextField from "atoms/EditableTextField";

import { StyledGroupCollapser, StyledTotalText } from "./styles";

export default function GroupCollapser({
  children,
  totalItems = 99,
  isGridOpen = false,
  postKey,
  postKey: groupCollapserKey,
  groupColor,
  subarea,
}) {
  const [collapse, setCollapse] = React.useState(isGridOpen);
  const handleCollapseClick = () => setCollapse(!collapse);
  return (
    <StyledGroupCollapser
      id={`groupCollapser${groupCollapserKey}`}
      key={`groupCollapser${groupCollapserKey}`}
      collapse={collapse}
    >
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
      <div
        key={`groupCollapser${groupCollapserKey}`}
        className="group-collapser"
        style={{ display: collapse ? "block" : "none" }}
      >
        {children({ groupColor, postObj: { postKey, subarea, groupColor } })}
      </div>
    </StyledGroupCollapser>
  );
}
