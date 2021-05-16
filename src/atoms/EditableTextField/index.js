import React from "react";
import EditableInput from "monday-ui-react-core/dist/EditableInput";

export default function EditableTextInput({ colName }) {
  return (
    <EditableInput
      inputType="input"
      ariaLabel="Header title edit"
      aria-label="Header title edit"
      value={colName}
    />
  );
}
