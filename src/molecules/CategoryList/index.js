import React from "react";
import getMondayViewData from "helpers/getMondayViewData";
import { useMondayViewDeps } from "contexts/MondayViewContext";

import filterData from "helpers/filterData";


export default function CategoryList() {
  const { state, dispatch } = useMondayViewDeps();
  const { searchCategoryTerm } = state;
  const mondayViewData = getMondayViewData();

  const filteredCategoryItems = filterData(mondayViewData, searchCategoryTerm, "mainarea");
  
  const handleCategoryClick = (e) => {
     console.log(e.target.id);
     const selectedCategory = e.target.id;
    dispatch({ type: "UPDATE_CATEGORY", payload: { selectedCategory } });

  }
  

  return (
    <>
      <h3>CategoryList</h3>
      <ul>
        {filteredCategoryItems.map((dataObj, i) => {
          return <button id={dataObj.mainarea} key={i} onClick={handleCategoryClick}>{dataObj.mainarea}</button>;
        })}
      </ul>
    </>
  );
}
