import React from "react";
// import RouteModalWrapper from "atoms/RouteModalWrapper";
import SimpleDrawer from "atoms/SimpleDrawer";
import HookForm from "atoms/HookForm";
import CustomRichTextEditor from "atoms/CustomRichTextEditor";
import CustomDropDown from "atoms/CustomDropDown";
import CustomTextInput from "atoms/CustomTextInput";
import CustomMuiDateTime from "atoms/CustomMuiDateTime";

import { useCommonContextDeps } from "contexts/CommonContext";

const mockColorOptions = [
  { value: "English", label: "English", isFixed: true },
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
];

export default function NewBookingForm({ id }) {
  const { newBookingFormRef } = useCommonContextDeps();
  return (
    <SimpleDrawer formName="New Booking">
      {(currentEvent, handleClose, setOpen, setCurrentEvent) => {
        newBookingFormRef.current = { setOpen, setCurrentEvent };
        console.log("NewBookingForm", currentEvent);
        return (
          <HookForm id={id}>
            {(genericFormProps) => {
              const { reset, handleSubmit, onSubmit } = genericFormProps;
              return (
                <>
                  <CustomDropDown
                    id="mainarea-id"
                    name="mainarea"
                    customLabel="mainarea"
                    className="mainarea"
                    placeholder="mainarea"
                    options={mockColorOptions}
                    {...genericFormProps}
                  />
                  <CustomDropDown
                    id="subarea-id"
                    name="subarea"
                    customLabel="subarea"
                    className="subarea"
                    placeholder="subarea"
                    options={mockColorOptions}
                    {...genericFormProps}
                  />
                  <CustomDropDown
                    id="scene-id"
                    name="scene"
                    customLabel="scene"
                    className="scene"
                    placeholder="scene"
                    options={mockColorOptions}
                    {...genericFormProps}
                  />
                  <CustomTextInput
                    id="initiative-id"
                    name="initiative"
                    customLabel="initiative"
                    className="initiative"
                    placeholder="initiative"
                    validation="success"
                    {...genericFormProps}
                  />
                  <CustomMuiDateTime
                    id="date-time-start-id"
                    name="date-time-start"
                    customLabel="date-time-start"
                    className="date-time-start"
                    placeholder="date-time-start"
                    validation="success"
                    {...genericFormProps}
                  />
                  <CustomMuiDateTime
                    id="date-time-end-id"
                    name="date-time-end"
                    customLabel="date-time-end"
                    className="date-time-end"
                    placeholder="date-time-end"
                    validation="success"
                    {...genericFormProps}
                  />
                  <CustomDropDown
                    id="format at city expo-id"
                    name="format at city expo"
                    customLabel="format at city expo"
                    className="format at city expo"
                    placeholder="format at city expo"
                    options={mockColorOptions}
                    {...genericFormProps}
                  />{" "}
                  <CustomDropDown
                    id="status-id"
                    name="status"
                    customLabel="status"
                    className="status"
                    placeholder="status"
                    options={mockColorOptions}
                    {...genericFormProps}
                  />{" "}
                  <CustomDropDown
                    id="target-group-id"
                    name="target-group"
                    customLabel="target-group"
                    className="target-group"
                    placeholder="target-group"
                    options={mockColorOptions}
                    {...genericFormProps}
                  />
                  <CustomTextInput
                    id="aktor-id"
                    name="aktor"
                    customLabel="aktor"
                    className="aktor"
                    placeholder="aktor"
                    validation="success"
                    {...genericFormProps}
                  />
                  <CustomTextInput
                    id="huvudtema-id"
                    name="huvudtema"
                    customLabel="huvudtema"
                    className="huvudtema"
                    placeholder="huvudtema"
                    validation="success"
                    {...genericFormProps}
                  />
                  <CustomRichTextEditor
                    id="target-group-id"
                    name="Fakturering"
                    customLabel="Fakturering"
                    className="Fakturering"
                    placeholder="Fakturering"
                    {...genericFormProps}
                  />
                  <CustomRichTextEditor
                    id="target-group-id"
                    name="Kommentarer"
                    customLabel="Kommentarer"
                    className="Kommentarer"
                    placeholder="Kommentarer"
                    {...genericFormProps}
                  />
                  <CustomTextInput
                    id="Kontaktperson-H22-id"
                    name="Kontaktperson-H22"
                    customLabel="Kontaktperson-H22"
                    className="Kontaktperson-H22"
                    placeholder="Kontaktperson-H22"
                    validation="success"
                    {...genericFormProps}
                  />
                  <CustomTextInput
                    id="Kontaktperson-initiativ-id"
                    name="Kontaktperson-initiativ"
                    customLabel="Kontaktperson-initiativ"
                    className="Kontaktperson-initiativ"
                    placeholder="Kontaktperson-initiativ"
                    validation="success"
                    {...genericFormProps}
                  />
                  <p>Click Here to View Details </p>
                  <button type="button" onClick={() => reset({})}>
                    RESET
                  </button>
                  <button type="button" onClick={handleSubmit(onSubmit)}>
                    SUBMIT
                  </button>
                  <button type="button" onClick={handleClose}>
                    CANCEL
                  </button>
                </>
              );
            }}
          </HookForm>
        );
      }}
    </SimpleDrawer>
  );
}
