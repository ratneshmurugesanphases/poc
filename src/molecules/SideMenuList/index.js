import React from "react";

import SearchField from "atoms/SearchField";
import CategoryList from "molecules/CategoryList";

import { useMondayViewDeps } from "contexts/MondayViewContext";

export default function SideMenuList() {
  const { state, dispatch } = useMondayViewDeps();
  const { searchCategoryTerm } = state;

  const handleSearchChange = (value) => {
    dispatch({ type: "SEARCH_BY_CATEGORY", payload: { searchCategoryTerm: value } });
  };

  return (
    <div style={{ width: "100%", margin: " 0px 20px" }}>
      <SearchField
        searchTerm={searchCategoryTerm}
        handleSearchChange={handleSearchChange}
        placeholder="Search by category..."
      />
      <CategoryList />
    </div>
  );
}
