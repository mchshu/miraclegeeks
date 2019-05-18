import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField, Fab } from "@material-ui/core";
import { withSnackbar } from "notistack";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  },
  login: {
    marginTop: 30,
    background: "#EDBB18"
  },
  menu: {
    width: 200
  }
}));

function Register(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const register = e => {
    e.preventDefault();
    if (password1 !== password2) {
      props.enqueueSnackbar("Inconsistent password", { variant: "error" });
      return;
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Create your account
        </Typography>
      </Grid>
      <Grid item style={{ alignSelf: "flex-end" }}>
        <Button component={Link} to="/passport/login" variant="contained" color="primary" size="small">
          Login
        </Button>
      </Grid>
      <Grid item>
        <form className={classes.container} onSubmit={register} action="/">
          <TextField
            label="Name"
            className={classes.textField}
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Email Address"
            className={classes.textField}
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            className={classes.textField}
            placeholder="Password"
            value={password1}
            onChange={e => setPassword1(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            error={!!password1 && !!password2 && password1 !== password2}
            label="Confirm Password"
            className={classes.textField}
            placeholder="Confirm Password"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            margin="normal"
            type="password"
            required
          />
          <Fab
            variant="extended"
            size="medium"
            color="secondary"
            aria-label="Login"
            className={classes.login}
            type="submit"
          >
            <span style={{ margin: "0 30px" }}>Login</span>
          </Fab>
        </form>
      </Grid>
    </Grid>
  );
}

export default withSnackbar(Register);
