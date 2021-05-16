import React from "react";
import TextField from "monday-ui-react-core/dist/TextField";

export default function CustomTextInput({
  name,
  control,
  customLabel,
  placeholder,
  validation,
  size,
  useFormFieldController,
}) {
  const {
    field: { ref, ...inputProps },
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
    <>
      <label htmlFor={name}>{customLabel}</label>
      <TextField
        {...inputProps}
        id={name}
        inputRef={ref}
        aria-invalid={errors.name ? "true" : "false"}
        placeholder={placeholder}
        validation={validation}
        size={size}
      />
      {errors.name && errors.name.type === "required" && (
        <span role="alert">This is required</span>
      )}
    </>
  );
}
