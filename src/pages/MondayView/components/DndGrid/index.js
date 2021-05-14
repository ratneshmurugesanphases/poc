import React from "react";

import { Table, StyledTh, StyledRow, StyledCell } from "./styles";
import MenuButton from "monday-ui-react-core/dist/MenuButton";
import Menu from "monday-ui-react-core/dist/Menu";
import MenuItem from "monday-ui-react-core/dist/MenuItem";
import Tooltip from "monday-ui-react-core/dist/Tooltip";

import SvgIcon from "@material-ui/core/SvgIcon";
import useTableController from "../../hooks/useTableController";

const DndGrid = () => {
  const [
    cols,
    rows,
    dragOverCol,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    handleSortClick,
  ] = useTableController();

  return (
    <>
      <Table>
        <thead>
          <tr>
            {cols.map((colName, colIndex) => {
              return (
                <StyledTh
                  id={colName}
                  key={colIndex}
                  draggable
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleOnDrop}
                  onDragEnter={handleDragEnter}
                  dragOver={colName === dragOverCol}
                >
                  {colName}
                  <Tooltip
                    // showDelay={600}
                    content={`I'm a tooltip`}
                    immediateShowDelay={5000}
                  >
                    <MenuButton
                      dialogPosition={MenuButton.dialogPositions.BOTTOM_END}
                      ariaLabel={"Bottom Start"}
                    >
                      <Menu id="menu" size={Menu.sizes.MEDIUM}>
                        <MenuItem title="The sun" />
                        <MenuItem title="The moon" />
                        <MenuItem title="And the stars" />
                      </Menu>
                    </MenuButton>
                    <SvgIcon>
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                  </Tooltip>
                </StyledTh>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <StyledRow key={rowIndex}>
              {Object.entries(row).map(([_, v], idx) => (
                <StyledCell
                  className="cell"
                  key={v}
                  dragOver={cols[idx] === dragOverCol}
                >
                  {row[cols[idx]]}
                </StyledCell>
              ))}
            </StyledRow>
          ))}
        </tbody>
      </Table>
      <button onClick={handleSortClick}>SORT</button>
    </>
  );
};

export default DndGrid;
