import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import React from "react";

function DialogComponent() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.log("Broadcast Cahnnel started");
    const bc = new BroadcastChannel("main_channel");
    bc.onmessage = (ev) => {
      console.log(ev);
    };
    return () => {
      bc.close();
      console.log("Broadcast Cahnnel closed");
    };
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Example</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a dialog from the Material UI app rendered in a React{" "}
            <code>Portal</code>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            autoFocus
          >
            Nice
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogComponent;
