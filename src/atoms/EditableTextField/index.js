import React, { forwardRef } from "react";
import EditableInput from "monday-ui-react-core/dist/EditableInput";

const EditableTextField = forwardRef(({ editableInputValue, autoSize, className }, forwardedRef) => {
  const handleFinishEditing = (e) => console.log("handleFinishEditing", e);

  return (
    <EditableInput
      inputType="input"
      className={className}
      ariaLabel="Header title edit"
      aria-label="Header title edit"
      shouldFocusOnMount={false}
      value={editableInputValue}
      ref={forwardedRef}
      autoSize={autoSize}
      autoComplete={true}
      onFinishEditing={(e) => handleFinishEditing(e)}
    />
  );
});
export default EditableTextField;
