import React, { useEffect, useState } from "react";
import SearchField from "atoms/SearchField";
import { useMondayViewDeps } from "contexts/MondayViewContext";

export default function GridList() {
  const { state, dispatch } = useMondayViewDeps();

  const handleSearchChange = (value) => {
    dispatch({ type: "SEARCH_BY_ANY", payload: { searchTerm: value } });
  };

  return (
    <div style={{ width: "100%", margin: " 0px 20px" }}>
      <SearchField
        searchTerm={state.searchTerm}
        handleSearchChange={handleSearchChange}
        // handleClearOnIconClick={handleClearOnIconClick}
      />
    </div>
  );
}
