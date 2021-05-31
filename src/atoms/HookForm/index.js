import React from "react";

import useForm from "hooks/useForm";
import useFormFieldController from "hooks/useFormFieldController";

import { StyledHookForm, StyledFormField } from "./styles.js";

export default function HookForm({ children, formName, id }) {
  // const { formApiServicesFactory } = useDeps();
  const { handleSubmit, reset, control, setValue } = useForm();
  const onSubmit = (data, event) => {
    console.log({ data, event });
  };

  console.log("HookForm");

  return (
      <StyledHookForm id={id}>
        <strong>{formName}</strong>
        <StyledFormField>
          {children({
            control,
            reset,
            useFormFieldController,
            handleSubmit,
            onSubmit,
            setValue,
          })}
        </StyledFormField>
      </StyledHookForm>
  );
}
