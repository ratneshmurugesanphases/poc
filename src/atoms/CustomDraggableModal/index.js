import React from "react";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";

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

export default function CustomDraggableModal({ children, ModalTitle }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      scroll={"paper"}
      aria-labelledby="scroll-modal-title"
      aria-describedby="scroll-modal-description"
    >
      <div id="draggable-modal-title">{ModalTitle}</div>
      {children()}
    </Dialog>
  );
}
