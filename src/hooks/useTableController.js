import { useState } from "react";
import { useMondayViewDeps } from "contexts/MondayViewContext";

const useTableController = () => {
  const { state, dispatch } = useMondayViewDeps();
  const { cols, rows } = state;
  const [sortType, setSortType] = useState(false);
  const [dragOverCol, setDragOverCol] = useState("");

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = cols.indexOf(id);
    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (e) => {
    const { id } = e.target;
    setDragOverCol(id);
  };

  const handleOnDrop = (e) => {
    const { id } = e.target;
    const droppedColIdx = cols.indexOf(id);
    const draggedColIdx = e.dataTransfer.getData("colIdx");
    const tempCols = [...cols];
    tempCols[draggedColIdx] = cols[droppedColIdx];
    tempCols[droppedColIdx] = cols[draggedColIdx];
    dispatch({ type: "SWAP_COLUMN", payload: { swappedCol: tempCols } });
    setDragOverCol("");
  };

  const handleSortClick = (colName) => {
    setSortType(!sortType);
    dispatch({
      type: "SORT_BY_PROPERTY",
      payload: { sortByProperty: colName, subProperty: "text", sortType },
    });
  };

  return {
    cols,
    rows,
    dragOverCol,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    handleSortClick,
  };
};

export default useTableController;
