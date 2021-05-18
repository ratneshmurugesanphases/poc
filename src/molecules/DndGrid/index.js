import React, { useRef } from "react";

import {
  StyledGrid,
  StyledGridHeaderRow,
  StyledGridHeader,
  StyledGridBodyRow,
  StyledGridHeaderContainer,
} from "./styles";

import GridHeaderMenuButton from "atoms/GridHeaderMenuButton";
import GridHeaderTooltip from "atoms/GridHeaderTooltip";
import EditableTextField from "atoms/EditableTextField";
import GroupCollapser from "atoms/GroupCollapser";
import GridCell from "atoms/GridCell";

import getMondayViewData from "helpers/getMondayViewData";

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

  console.log("DndGrid");

  const mondayViewData = getMondayViewData();

  return mondayViewData.map((postObj, postIndex) => {
    return (
      <div key={postObj.postKey}>
        <GroupCollapser {...postObj}>
          {({ postKey, groupColor }) => {
            return (
              <div
                id={postKey}
                key={postKey}
                style={{ backgroundColor: groupColor }}
              >
                <StyledGrid>
                  {postIndex === 0 ? (
                    <StyledGridHeaderRow colLength={cols.length}>
                      {cols.map((colName, colIndex) => {
                        return (
                          <StyledGridHeader
                            id={colName}
                            key={colIndex}
                            draggable
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleOnDrop}
                            onDragEnter={handleDragEnter}
                            dragOver={colName === dragOverCol}
                          >
                            <button
                              id={colName}
                              key={colIndex}
                              className="sort-button"
                              onClick={(e) => {
                                console.log({
                                  id: e.target.id,
                                });
                                handleSortClick(e.target.id);
                              }}
                            >
                              SORT
                            </button>
                            <StyledGridHeaderContainer>
                              <div style={{ width: "40px" }}></div>

                              <EditableTextField EditableInputValue={colName} />
                              <GridHeaderTooltip colName={colName} />
                              <GridHeaderMenuButton />
                            </StyledGridHeaderContainer>
                          </StyledGridHeader>
                        );
                      })}
                    </StyledGridHeaderRow>
                  ) : null}
                  {rows.map((row, rowIndex) => {
                    return (
                      <StyledGridBodyRow key={rowIndex} colLength={cols.length}>
                        {Object.entries(row).map(([_, value], idx) => {
                          return (
                            <GridCell
                              value={value}
                              dragOverCol={dragOverCol}
                              cols={cols}
                              row={row}
                              idx={idx}
                            />
                          );
                        })}
                      </StyledGridBodyRow>
                    );
                  })}
                </StyledGrid>
              </div>
            );
          }}
        </GroupCollapser>
      </div>
    );
  });
};

export default DndGrid;
