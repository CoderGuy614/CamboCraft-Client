import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [currentImg, setCurrentImg] = React.useState("");

  const handleClickOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleClickOpen(props.img)}
      >
        Full Size Picture
      </Button>
      <Dialog
        fullScreen={true}
        modal={false}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title"></DialogTitle>
        <DialogContent>
          {" "}
          <img
            alt=""
            style={{ width: "100%" }}
            src="https://lh3.googleusercontent.com/dUK--wo8qrOPxqOgb4UcXBoBD85xfOhPeNdS8IEtJq4HeQpHiqrr-k__zprV7M2QHvHX8de8SzJl3jehgg-Lg8Kw6AytMt-HMG_If5uiniSb3hcCiOKFoGhShxLb9pQAz4tE5qd_va0=w2400"
          />{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
