import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
const styles ={
  title: { fontWeight: "bolder" },
  contentContainer: { padding: "6%" },
  cancelButton: { backgroundColor: "#616161", textTransform: "capitalize" },
  deleteButton:{ textTransform: "capitalize" }
}
export default function DeletePrompt({ open, handleClose, handleDelete }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-alert"
        aria-describedby="delete-alert"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={styles.title}>Delete</span>
        </DialogTitle>
        <Divider />
        <DialogContent style={styles.contentContainer}>
          <DialogContentText id="alert-dialog-description">
            Once you click Delete, you will not be able to undo this action. Are
            you sure you want to continue?
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            style={styles.cancelButton}
          >
            cancel
          </Button>
          <Button
            onClick={handleDelete}
            autoFocus
            variant="contained"
            color="error"
            style={styles.deleteButton}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
