import React from "react";

import {
  StyledGrid,
  StyledGridHeaderRow,
  StyledGridHeader,
  StyledGridBodyRow,
} from "./styles";
import GridHeaderMenuButton from "atoms/GridHeaderMenuButton";
import GridHeaderTooltip from "atoms/GridHeaderTooltip";
import EditableTextField from "atoms/EditableTextField";
import GroupCollapser from "atoms/GroupCollapser";
import GridCell from "atoms/GridCell";
// import SvgIcon from "@material-ui/core/SvgIcon";
import useTableController from "hooks/useTableController";

const DndGrid = () => {
  const {
    cols,
    rows,
    dragOverCol,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    handleSortClick,
  } = useTableController();

  return (
    <GroupCollapser groupName="SubArea 1" totalItems={55}>
      {() => (
        <>
          <StyledGrid>
            <div>
              <StyledGridHeaderRow colLength={cols.length}>
                {cols.map((colName, colIndex) => {
                  return (
                    <>
                      <StyledGridHeader
                        id={colName}
                        key={colIndex}
                        draggable
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDrop={handleOnDrop}
                        onDragEnter={handleDragEnter}
                        dragOver={colName === dragOverCol}
                        // onMouseOver={handleMouseOver}
                      >
                        <button onClick={handleSortClick}>SORT</button>
                        {/* <div style={{ width: "40px" }}></div> */}
                        <EditableTextField colName={colName} />
                        <GridHeaderTooltip colName={colName} />
                        <GridHeaderMenuButton />
                      </StyledGridHeader>
                    </>
                  );
                })}
              </StyledGridHeaderRow>
            </div>
            <div>
              {rows.map((row, rowIndex) => (
                <StyledGridBodyRow key={rowIndex} colLength={cols.length}>
                  {Object.entries(row).map(([_, value], idx) => (
                    <GridCell
                      value={value}
                      dragOverCol={dragOverCol}
                      cols={cols}
                      row={row}
                      idx={idx}
                    />
                  ))}
                </StyledGridBodyRow>
              ))}
            </div>
          </StyledGrid>
        </>
      )}
    </GroupCollapser>
  );
};

export default DndGrid;
