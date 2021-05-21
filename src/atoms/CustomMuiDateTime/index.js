import React from "react";
import TextFieldMui from "@material-ui/core/TextField";

import { StyledDateTimeInput } from "./styles";

export default function CustomMuiDateTime({
  name,
  control,
  className,
  customLabel,
  useFormFieldController,
}) {
  const {
    field,
    // fieldState: { invalid, isTouched, isDirty },
    formState: {
      // touchedFields,
      // dirtyFields,
      errors,
    },
  } = useFormFieldController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <StyledDateTimeInput>
      <label htmlFor={name}>{customLabel}</label>
      <TextFieldMui
        id={name}
        type="datetime-local"
        // defaultValue="2017-05-24T10:30"
        className={className}
        {...field}
      />
      {errors[name] && errors[name].type === "required" && (
        <span role="alert">This is required</span>
      )}
    </StyledDateTimeInput>
  );
}
