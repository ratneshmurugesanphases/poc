import React from "react";
import Dropdown from "monday-ui-react-core/dist/Dropdown";

export default function CustomDropDown({
  id,
  name,
  customLabel,
  className,
  control,
  placeholder,
  options,
  isVirtualized,
  validation,
  useFormFieldController,
}) {
  const {
    field: { ref, ...inputProps },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useFormFieldController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <>
      <label htmlFor={name}>{customLabel}</label>
      <Dropdown
        id={id}
        className={className}
        customLabel={customLabel}
        {...inputProps}
        inputRef={ref}
        isVirtualized={isVirtualized}
        options={options}
        validation={validation}
        placeholder={placeholder}
      />
    </>
  );
}
