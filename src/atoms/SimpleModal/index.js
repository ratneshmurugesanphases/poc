import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import { useCalendarViewContextDeps } from "contexts/CalendarViewContext";

export default function SimpleModal({ children, formName }) {
  const { newBookingFormRef } = useCalendarViewContextDeps();
  const [open, setOpen] = React.useState(false);
  if (newBookingFormRef) newBookingFormRef.current = { setOpen };
  const handleClose = () => {
    setOpen(false);
  };
  console.log("CustomDraggableModal", open);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        disableBackdropClick
        // disableEscapeKeyDown
      >
        <DialogTitle>{formName}</DialogTitle>
        <DialogContent dividers={true}>{children(handleClose)}</DialogContent>
      </Dialog>
    </>
  );
}
