import React, { useState } from "react";
import SearchField from "atoms/SearchField";
import { useMondayViewDeps } from "contexts/MondayViewContext";

export default function GridList() {
  const { } = useMondayViewDeps();
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (value) => {
    console.log(value);
    setSearchValue(value);
  };
  const handleClearOnIconClick = () => {
    setSearchValue("");
  };
  return (
    <div style={{ width: "100%", margin: " 0px 20px" }}>
      <SearchField
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        handleClearOnIconClick={handleClearOnIconClick}
      />
    </div>
  );
}
