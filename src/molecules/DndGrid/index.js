import React from "react";

import {
  StyledGrid,
  StyledGridHeaderRow,
  StyledGridHeader,
  StyledGridBodyRow,
  StyledGridHeaderContainer,
} from "./styles";

import GridHeaderTooltip from "atoms/GridHeaderTooltip";
import GroupCollapser from "atoms/GroupCollapser";
import GridCell from "atoms/GridCell";
import SearchField from "atoms/SearchField";
import useTableController from "hooks/useTableController";
import getMondayViewData from "helpers/getMondayViewData";
import { filterDataByProperty } from "helpers/filters";

const DndGrid = () => {
  const {
    cols,
    rows,
    dragOverColumn,
    searchTerm,
    selectedCategory,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    // handleSortClick,
    handleSearchChange,
  } = useTableController();

  // console.log("DndGrid", rows.length);

  const mondayViewData = getMondayViewData();
  const filteredViewData = filterDataByProperty(
    mondayViewData,
    selectedCategory,
    "mainarea"
  );

  return (
    <div>
      <SearchField
        searchTerm={searchTerm}
        placeholder="Search by content..."
        handleSearchChange={handleSearchChange}
      />
      {filteredViewData.map((postObj) => {
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
                      <StyledGridHeaderRow colLength={cols.length}>
                        {cols.map((colName, colIndex) => {
                          return colIndex === 0 ? (
                            <StyledGridHeader id={colName} key={colIndex}>
                              {/* <EditableTextField
                                EditableInputValue={postObj.subarea}
                                autoSize={true}
                              /> */}
                              <StyledGridHeaderContainer></StyledGridHeaderContainer>
                            </StyledGridHeader>
                          ) : (
                            <StyledGridHeader
                              id={colName}
                              key={colIndex}
                              draggable
                              onDragStart={handleDragStart}
                              onDragOver={handleDragOver}
                              onDrop={handleOnDrop}
                              onDragEnter={handleDragEnter}
                              dragOver={colName === dragOverColumn}
                            >
                              {/* <button
                                id={colName}
                                key={colIndex}
                                className="sort-button"
                                onClick={(e) => handleSortClick(e.target.id)}
                              >
                                SORT
                              </button> */}
                              <StyledGridHeaderContainer>
                                <div style={{ width: "40px" }}></div>
                                {/* <EditableTextField
                                  editableInputValue={colName}
                                /> */}
                                <code>{colName}</code>
                                <GridHeaderTooltip colName={colName} />
                                {/* <GridHeaderMenuButton /> */}
                              </StyledGridHeaderContainer>
                            </StyledGridHeader>
                          );
                        })}
                      </StyledGridHeaderRow>
                      {rows.map((row, rowIndex) => {
                        return (
                          <StyledGridBodyRow
                            key={rowIndex}
                            colLength={cols.length}
                          >
                            {Object.entries(row).map(([_, value], idx) => {
                              return (
                                <GridCell
                                  value={value}
                                  dragOverColumn={dragOverColumn}
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
      })}
    </div>
  );
};

export default DndGrid;
