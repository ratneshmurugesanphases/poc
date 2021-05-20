import React from "react";
import getMondayViewData from "helpers/getMondayViewData";
import { useMondayViewDeps } from "contexts/MondayViewContext";

// import { filterDataByProperty } from "helpers/filters";

export default function CategoryList() {
  const { dispatch } = useMondayViewDeps();
  // const { categoryTerm, selectedCategory } = state;
  const mondayViewData = getMondayViewData();

  // const filteredCategoryItems = filterDataByProperty(
  //   mondayViewData,
  //   categoryTerm,
  //   selectedCategory
  // );

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
        {mondayViewData.map((dataObj, i) => {
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
