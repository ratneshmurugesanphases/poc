import React from "react";
import Draggable from "react-draggable";
// import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import Dropdown from "monday-ui-react-core/dist/Dropdown";
import TextField from "monday-ui-react-core/dist/TextField";
import TextFieldMui from "@material-ui/core/TextField";

import GroupCollapser from "../GroupCollapser";
import RichTextEditor from "react-rte";

import {
  useForm,
  useController as useFormFieldController,
} from "react-hook-form";

import "./styles.scss";

const defaultValues = {
  mainArea: "",
  initiativePost: "",
  dateTime: "",
};

const mockOptionData = [
  { value: "English", label: "English", isFixed: true },
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
];

function CustomMuiDateTime(props) {
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

function CustomMondayTextInput({
  name,
  control,
  customLabel,
  placeholder,
  validation,
  size,
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

function CustomMondayDropDown({
  id,
  name,
  customLabel,
  className,
  control,
  placeholder,
  options,
  isVirtualized,
  validation,
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

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Form() {
  const { handleSubmit, reset, control, register } = useForm({ defaultValues });
  const [open, setOpen] = React.useState(true);

  const onSubmit = (data) => console.log("onSubmit", data);

  const handleClose = () => {
    setOpen(false);
  };

  // const handleDropdownOptionChange = (inputValue) => {
  //   console.log("IV", inputValue);
  //   return mockOptionData.filter(({ label }) =>
  //     label.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  // };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div id="draggable-dialog-title"> DRAG IT</div>

        <GroupCollapser>
          {() => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div id="scroll-dialog-title">New Booking</div>
              <div>
                <CustomMondayDropDown
                  id="mainArea"
                  name="mainArea"
                  customLabel="Main Area"
                  className="mainArea"
                  type=""
                  tabIndex={0}
                  labelIconName=""
                  placeholder="mainArea"
                  options={mockOptionData}
                  isVirtualized={true}
                  validation={{ text: "Assist text" }}
                  // rhf
                  control={control}
                  register={register}
                  // methods
                  // onChange={handleDropdownOptionChange}
                />
                <CustomMondayTextInput
                  id="initiativePost"
                  name="initiativePost"
                  customLabel="Initiative Name"
                  className="initiativePost"
                  type=""
                  labelIconName="fa-envelope"
                  placeholder="Placeholder text"
                  size={TextField.sizes.SMALL}
                  validation={{ text: "Assist text" }}
                  // rhf
                  control={control}
                  register={register}
                />
                <CustomMuiDateTime
                  id="datetime-local"
                  name="dateTime"
                  className="datetime-local"
                  control={control}
                  type="datetime-local"
                  placeholder="datetime-local"
                />
                <RichTextEditor
                  // value={this.state.value}
                  value={RichTextEditor.createEmptyValue()}
                  // onChange={this.onChange}
                />
                <button type="button" onClick={() => reset({ defaultValues })}>
                  Reset
                </button>
                <input type="submit" />
              </div>
            </form>
          )}
        </GroupCollapser>
      </Dialog>
    </div>
  );
}
