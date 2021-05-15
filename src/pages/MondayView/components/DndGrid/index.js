import React, { useRef, forwardRef } from "react";

import {
  StyledGrid,
  StyledGridHeaderRow,
  StyledGridHeader,
  StyledGridBodyRow,
  StyledGridCell,
  StyledGridHeaderMenuButton,
} from "./styles";
import MenuButton from "monday-ui-react-core/dist/MenuButton";
import Menu from "monday-ui-react-core/dist/Menu";
import MenuItem from "monday-ui-react-core/dist/MenuItem";
import EditableInput from "monday-ui-react-core/dist/EditableInput";
import Tooltip from "monday-ui-react-core/dist/Tooltip";
// import SvgIcon from "@material-ui/core/SvgIcon";
import DropdownChevronDown from "monday-ui-react-core/dist/icons/DropdownChevronDown";
import Info from "monday-ui-react-core/dist/icons/Info";

import useTableController from "../../hooks/useTableController";
import GroupCollapser from "atoms/GroupCollapser";

const GridHeaderMenuButton = forwardRef((props, menuButtonRef) => {
  // console.log("SGHMBW", menuButtonRef);
  return (
    <StyledGridHeaderMenuButton>
      <MenuButton
        dialogPosition={MenuButton.dialogPositions.BOTTOM_END}
        ref={menuButtonRef}
        component={DropdownChevronDown}
      >
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem title="The sun" />
          <MenuItem title="The moon" />
          <MenuItem title="And the stars" />
        </Menu>
      </MenuButton>
    </StyledGridHeaderMenuButton>
  );
});

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
    <GroupCollapser>
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
                        {/* <button onClick={handleSortClick}>SORT</button> */}
                        <div style={{ width: "40px" }}></div>
                        <EditableInput
                          inputType="input"
                          ariaLabel="Header title edit"
                          aria-label="Header title edit"
                          value={colName}
                        />
                        <Tooltip
                          showDelay={0}
                          content={colName}
                          immediateShowDelay={0}
                        >
                          <Info />
                        </Tooltip>
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
                    <StyledGridCell
                      className="cell"
                      key={value}
                      dragOver={cols[idx] === dragOverCol}
                      colLength={cols.length}
                    >
                      {row[cols[idx]]}
                    </StyledGridCell>
                  ))}
                </StyledGridBodyRow>
              ))}
            </div>
          </StyledGrid>
          <button onClick={handleSortClick}>SORT</button>
        </>
      )}
    </GroupCollapser>
  );
};

export default DndGrid;
