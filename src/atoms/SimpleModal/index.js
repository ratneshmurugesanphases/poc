import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const scheduler = window.scheduler;

export default function SimpleModal({ children, formName }) {
  const [open, setOpen] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState(null);
  const isThisNewEvent = currentEvent && currentEvent.isThisNewEvent;
  const newEventId = currentEvent && currentEvent.newEventId;

  const handleClose = () => {
    if (isThisNewEvent) scheduler.deleteEvent(newEventId);
    setOpen(false);
  };

  console.log("SimpleModal", { open, currentEvent });

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
        <DialogContent dividers={true}>
          {children(currentEvent, handleClose, setOpen, setCurrentEvent)}
        </DialogContent>
      </Dialog>
    </>
  );
}
