import React from "react";
import Tooltip from "monday-ui-react-core/dist/Tooltip";
import Info from "monday-ui-react-core/dist/icons/Info";

export default function GridHeaderTooltip({ colName, tooltipIcon = <Info /> }) {
  return (
    <Tooltip showDelay={0} content={colName} immediateShowDelay={0}>
      {tooltipIcon}
    </Tooltip>
  );
}
