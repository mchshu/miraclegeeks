import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField, Fab } from "@material-ui/core";

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
    background: "#EDBB18",
  },
  menu: {
    width: 200
  }
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Welcome！
        </Typography>
      </Grid>
      <Grid item style={{ alignSelf: "flex-end" }}>
        <Button component={Link} to= "/passport/register" variant="contained" color="primary" size="small">
          Register
        </Button>
      </Grid>
      <Grid item>
        <form className={classes.container} onSubmit={login}>
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin="normal"
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
            <span style={{margin: "0 30px"}}>Login</span>
          </Fab>
        </form>
      </Grid>
    </Grid>
  );
}
