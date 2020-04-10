import React from "react";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className={"footer"}>
      <Typography variant="h6" align="center" gutterBottom>
        Thank you for loooking!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Please contact Kimlang to see and try any of these designs
      </Typography>
      <Copyright />
    </footer>
  );
}
