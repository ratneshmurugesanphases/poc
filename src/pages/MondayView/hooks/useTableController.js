import { useState } from "react";

import generateData from "pages/MondayView/helpers/generateData";
import sortData from "pages/MondayView/helpers/sortData";

const { columns, data } = generateData(5);

const useTableController = () => {
  const [cols, setCols] = useState(columns);
  const [rows] = useState(data);
  const [sortOrder, setSortOrder] = useState(false);

  const [dragOverCol, setDragOverCol] = useState("");

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = cols.indexOf(id);
    console.log("handleDragStart", { id, idx });
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
    setCols(tempCols);
    setDragOverCol("");
  };

  const handleSortClick = () => setSortOrder((sortOrder) => !sortOrder);

  console.log({ rows, cols });

  const sortedRows = sortData({
    datatoBeSorted: rows,
    sortByProperty: "email",
    sortType: !!(sortOrder && "ascending"),
  });

  return [
    cols,
    sortedRows,
    dragOverCol,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleOnDrop,
    handleSortClick,
  ];
};

export default useTableController;
