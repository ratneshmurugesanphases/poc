import React from "react";
import Drawer from "@material-ui/core/Drawer";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const scheduler = window.scheduler;

export default function SimpleDrawer({ children, formName }) {
  const [open, setOpen] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState(null);
  const isThisNewEvent = currentEvent && currentEvent.isThisNewEvent;
  const newEventId = currentEvent && currentEvent.newEventId;

  const handleClose = () => {
    if (isThisNewEvent) scheduler.deleteEvent(newEventId);
    setOpen(false);
  };

  console.log("SimpleDrawer", { open, currentEvent, formName, children });

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <DialogTitle>{formName}</DialogTitle>
      <DialogContent dividers={true}>
        {children(currentEvent, handleClose, setOpen, setCurrentEvent)}
      </DialogContent>
    </Drawer>
  );
}
