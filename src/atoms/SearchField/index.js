import React from "react";
import TextField from "monday-ui-react-core/dist/TextField";

// import {DebounceInput} from 'react-debounce-input';

export default function SearchField({
  searchTerm,
  placeholder = "Search...",
  handleSearchChange,
  autoFocus = false,
}) {
  return (
    <TextField
      inputAriaLabel={placeholder}
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChange={handleSearchChange}
      value={searchTerm}
      id="SearchField"
      disabled={false}
      size={TextField.sizes.MEDIUM}
    />
  );
}
