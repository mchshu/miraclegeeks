import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Login from "./Login";
import Register from "./Register";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "linear-gradient(to bottom, #E9EDF0, #E9EDF0 40%, #FFFFFF 40%);",
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`
  },
  main: {
    width: 600,
    background: "white",
    boxShadow: "0px 0px 12px 0px rgba(171,184,208,1)",
    borderRadius: "4px",
    padding: "40px 20px 80px"
  }
}));

export default function PassportRouter() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item className={classes.main}>
        <Route path="/passport/login" component={Login} />
        <Route path="/passport/register" component={Register} />
      </Grid>
    </Grid>
  );
}
