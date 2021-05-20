import React from "react";

import SearchField from "atoms/SearchField";
import CategoryList from "molecules/CategoryList";

import { useMondayViewDeps } from "contexts/MondayViewContext";

export default function SideMenuList() {
  const { state, dispatch } = useMondayViewDeps();
  const { categoryTerm } = state;

  const handleSearchChange = (value) => {
    dispatch({ type: "UPDATE_SEARCH", payload: { categoryTerm: value } });
  };

  return (
    <div style={{ width: "100%", margin: " 0px 20px" }}>
      <SearchField
        searchTerm={categoryTerm}
        handleSearchChange={handleSearchChange}
        placeholder="Search by category..."
        autoFocus={true}
      />
      <CategoryList />
    </div>
  );
}
