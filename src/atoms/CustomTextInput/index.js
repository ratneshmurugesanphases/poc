import React from "react";
import TextField from "monday-ui-react-core/dist/TextField";

import { StyledTextInput } from "./styles";

export default function CustomTextInput({
  name,
  control,
  customLabel,
  placeholder,
  validation = "error",
  size,
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
  });

  // console.log("errors", errors);

  return (
    <StyledTextInput>
      <label htmlFor={name}>{customLabel}</label>
      <TextField
        {...field}
        id={name}
        aria-invalid={errors.name ? "true" : "false"}
        placeholder={placeholder}
        validation={validation}
        size={size}
        autoFocus={false}
      />
      {errors[name] && errors[name].type === "required" && (
        <span role="alert">This is required</span>
      )}
    </StyledTextInput>
  );
}
