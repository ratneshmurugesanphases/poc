import { useMondayViewDeps } from "contexts/MondayViewContext";

const useTableController = () => {
  const { state, dispatch } = useMondayViewDeps();
  const { cols, rows, dragOverColumn } = state;

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = cols.indexOf(id);
    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (e) => {
    const { id } = e.target;
    dispatch({ type: "DRAG_OVER_COLUMN", payload: { id } });
  };

  const handleOnDrop = (e) => {
    const { id } = e.target;
    const droppedColIdx = cols.indexOf(id);
    const draggedColIdx = e.dataTransfer.getData("colIdx");
    const tempCols = [...cols];
    tempCols[draggedColIdx] = cols[droppedColIdx];
    tempCols[droppedColIdx] = cols[draggedColIdx];
    dispatch({ type: "SWAP_COLUMN", payload: { swappedCol: tempCols } });
    dispatch({ type: "DRAG_OVER_COLUMN", payload: { id: "" } });
  };

  const handleSortClick = (colName) => {
    dispatch({
      type: "SORT_BY_PROPERTY",
      payload: { sortByProperty: colName, subProperty: "text" },
    });
  };

  return {
    cols,
    rows,
    dragOverColumn,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    handleSortClick,
  };
};

export default useTableController;
