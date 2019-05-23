import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Fab } from '@material-ui/core';
import Axios from 'axios';
import { withSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  },
  login: {
    marginTop: 30,
    background: '#EDBB18'
  },
  menu: {
    width: 200
  }
}));

function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async e => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/login', { email, password });

      if (data.errcode && data.errcode > 0) {
        props.enqueueSnackbar('username or password is invalid!', { variant: 'error' });
      } else {
        props.setUsername(data.username);
        props.history.push('/project');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Welcome！
        </Typography>
      </Grid>
      <Grid item style={{ alignSelf: 'flex-end' }}>
        <Button component={Link} to="/passport/register" variant="contained" color="primary" size="small">
          Register
        </Button>
      </Grid>
      <Grid item>
        <img src="/images/emoji.png" width={38} alt="login" />
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
            type="password"
            required
          />
          <Fab
            variant="extended"
            size="medium"
            color="secondary"
            aria-label="Login"
            className={classes.login}
            type="submit">
            <span style={{ margin: '0 30px' }}>Login</span>
          </Fab>
        </form>
      </Grid>
    </Grid>
  );
}

export default withRouter(withSnackbar(Login));
