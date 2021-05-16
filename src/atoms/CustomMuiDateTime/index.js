import React from "react";
import TextFieldMui from "@material-ui/core/TextField";

export default function CustomMuiDateTime({ useFormFieldController, props }) {
  const {
    field,
    // fieldState: { invalid, isTouched, isDirty },
    formState: {
      // touchedFields,
      // dirtyFields,
      errors,
    },
  } = useFormFieldController({
    ...props,
    rules: { required: true },
    defaultValue: "",
  });

  // console.log("CustomMuiDateTime", {field, props});

  return (
    <>
      <TextFieldMui {...field} {...props} />
      {errors.name && errors.name.type === "required" && (
        <span role="alert">This is required</span>
      )}
    </>
  );
}
