import React from "react";

import { useForm } from "hooks/useForm";
import { useFormFieldController } from "hooks/useFormFieldController";

import "./styles.scss";

export default function HookForm({ children, formName, defaultValues = {} }) {
  // const { formApiServicesFactory } = useDeps();
  const { handleSubmit, reset, control, register } = useForm();
  const onSubmit = (data) => console.log("onSubmit", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>{formName}</div>
      {children(control, register, useFormFieldController)}
      <button type="button" onClick={() => reset({ defaultValues })}>
        Reset
      </button>
      <input type="submit" />
    </form>
  );
}
