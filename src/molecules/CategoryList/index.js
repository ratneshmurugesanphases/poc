import React from "react";
import getMondayViewData from "helpers/getMondayViewData";
import { useMondayViewDeps } from "contexts/MondayViewContext";

import { filterDataByCategory } from "helpers/filters";

export default function CategoryList() {
  const { state, dispatch } = useMondayViewDeps();
  const { categoryTerm } = state;
  const mondayViewData = getMondayViewData();

  const filteredCategoryItems = filterDataByCategory(
    mondayViewData,
    categoryTerm,
    "mainarea"
  );

  const handleCategoryClick = (e) => {
    console.log(e.target.id);
    const categoryTerm = e.target.id;
    dispatch({
      type: "UPDATE_SEARCH",
      payload: { categoryTerm, selectedCategory: "mainarea", searchTerm: "" },
    });
  };

  return (
    <>
      <h3>CategoryList</h3>
      <ul>
        {filteredCategoryItems.map((dataObj, i) => {
          return (
            <button id={dataObj.mainarea} key={i} onClick={handleCategoryClick}>
              {dataObj.mainarea}
            </button>
          );
        })}
      </ul>
    </>
  );
}
