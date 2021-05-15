import React from "react";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export default function GroupCollapser({ children }) {
  const [collapse, setCollapse] = React.useState(true);
  // console.log(children);

  const handleCollapseClick = () => setCollapse(!collapse);
  return (
    <>
      <ListItem button onClick={handleCollapseClick}>
        <ListItemIcon>New Booking</ListItemIcon>
        {collapse ? "LESS" : "MORE"}
      </ListItem>
      <Collapse timeout="auto" unmountOnExit in={collapse} key={1}>
        {children()}
      </Collapse>
    </>
  );
}
