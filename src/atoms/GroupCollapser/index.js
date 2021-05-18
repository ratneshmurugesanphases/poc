import React from "react";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import styled from "styled-components";

// const StyledGroupCollapser = styled.div`
//   display: grid;
//   grid-template-columns: 70px 100px 1fr;
// `;

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
    <div
      id={`groupCollapser${groupCollapserKey}`}
      key={`groupCollapser${groupCollapserKey}`}
    >
      <ListItem button onClick={handleCollapseClick} style={{ height: "50px" }}>
        {collapse ? "LESS" : "MORE"}
        &nbsp; &nbsp; &nbsp;
        <ListItemIcon>{subarea}</ListItemIcon>
        &nbsp; &nbsp; &nbsp;
        <span>{`${totalItems} items`}</span>
      </ListItem>
      <Collapse
        timeout="auto"
        unmountOnExit
        in={collapse}
        key={`groupCollapser${groupCollapserKey}`}
        collapsedHeight="0px"
      >
        {children({ groupColor, postObj: { postKey, subarea, groupColor } })}
      </Collapse>
    </div>
  );
}
