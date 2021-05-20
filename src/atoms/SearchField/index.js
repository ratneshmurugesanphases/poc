import React from "react";
import Search from "monday-ui-react-core/dist/Search";
import SearchIcon from "monday-ui-react-core/dist/icons/Search";
import CloseSmall from "monday-ui-react-core/dist/icons/CloseSmall";

export default function SearchField({
  searchTerm,
  placeholder = "Search...",
  handleSearchChange,
  autoFocus = false,
}) {
  return (
    <Search
      inputAriaLabel={placeholder}
      autoFocus={autoFocus}
      placeholder={placeholder}
      debounceRate={0}
      onChange={handleSearchChange}
      value={searchTerm}
      iconName={SearchIcon}
      secondaryIconName={CloseSmall}
      validation={{
        None: null,
        Error: { status: "error" },
        Success: { status: "success" },
      }}
      id="SearchKnobs"
      disabled={false}
      size={Search.sizes.MEDIUM}
    />
  );
}
