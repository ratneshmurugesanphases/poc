import { useMondayViewDeps } from "contexts/MondayViewContext";
import filterData from "helpers/filterData";
import sortData from "helpers/sortData";

const useTableController = () => {
  const { state, dispatch } = useMondayViewDeps();
  const {
    cols,
    rows,
    dragOverColumn,
    searchTerm,
    sortByProperty,
    subProperty,
    sortType,
  } = state;

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
      type: "UPDATE_SORT",
      payload: {
        sortByProperty: colName,
        subProperty: "text",
        sortType: !sortType,
      },
    });
  };

  const handleSearchChange = (value) => {
    dispatch({ type: "SEARCH_BY_CONTENT", payload: { searchTerm: value } });
  };

  const sortedRows = sortData(rows, sortByProperty, subProperty, sortType);
  const sortedFilteredRows = filterData(sortedRows, searchTerm);

  return {
    cols,
    rows: sortedFilteredRows,
    dragOverColumn,
    searchTerm,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    handleSortClick,
    handleSearchChange
  };
};

export default useTableController;
