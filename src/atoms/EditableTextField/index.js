import React, { forwardRef } from "react";
import EditableInput from "monday-ui-react-core/dist/EditableInput";

const EditableTextInput = forwardRef(({ EditableInputValue }, forwardedRef) => {
  const handleFinishEditing = (e) => console.log("handleFinishEditing", e);

  return (
    <EditableInput
      inputType="input"
      ariaLabel="Header title edit"
      aria-label="Header title edit"
      shouldFocusOnMount={false}
      value={EditableInputValue}
      ref={forwardedRef}
      onFinishEditing={(e) => handleFinishEditing(e)}
    />
  );
});
export default EditableTextInput;
