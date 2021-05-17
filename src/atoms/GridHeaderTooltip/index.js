import React, { forwardRef } from "react";
import Tooltip from "monday-ui-react-core/dist/Tooltip";
import Info from "monday-ui-react-core/dist/icons/Info";

const GridHeaderTooltip = forwardRef(
  ({ colName, tooltipIcon = <Info /> }, forwardedRef) => {
    return (
      <Tooltip
        showDelay={0}
        content={colName}
        immediateShowDelay={0}
        ref={forwardedRef}
      >
        {tooltipIcon}
      </Tooltip>
    );
  }
);
export default GridHeaderTooltip;
