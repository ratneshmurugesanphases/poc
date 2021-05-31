import React from "react";
import Dropdown from "monday-ui-react-core/dist/Dropdown";

import { StyledDropdown } from "./styles.js";

import { formDefaults } from "configs/baseConfig";

export default function CustomDropDown({
  id,
  name,
  customLabel,
  className,
  control,
  placeholder,
  options,
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
    defaultValue: formDefaults[name],
  });

  // console.log("field", field);

  return (
    <StyledDropdown>
      <label htmlFor={name}>{customLabel}</label>
      <Dropdown
        id={id}
        className={className}
        customLabel={customLabel}
        options={options}
        placeholder={placeholder}
        size={Dropdown.size.SMALL}
        noOptionsMessage={() => "No options found!"}
        openMenuOnFocus={true}
        clearable={true}
        openMenuOnClick={true}
        {...field}
      />
      {errors[name] && errors[name].type === "required" && (
        <span role="alert">This is required</span>
      )}
    </StyledDropdown>
  );
}
