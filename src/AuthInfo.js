import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 20px",
    backgroundColor: "#323B54",
    borderRadius: "14px",
    paddingLeft: "10px",
    paddingRight: "10px"
  }
}));

export default function AuthInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button component={Link} to="/passport/login" color="inherit">
        Login
      </Button>
      <span>|</span>
      <Button component={Link} to="/passport/register" color="inherit">
        Register
      </Button>
    </div>
  );
}
