import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import AuthInfo from './AuthInfo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#0A1433'
  },

  nav: {
    height: 50
  },

  left: {
    height: '100%'
  },

  right: {
    height: '100%'
  },

  menuButton: {
    color: '#ffffff',
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 100,
    '&:hover': {
      borderBottom: '#4988F9 3px solid'
    }
  },
  enterprise: {
    marginBottom: -5
  }
}));

function Normal() {
  const classes = useStyles();

  return (
    <>
      <Button color="inherit" component={Link} to="/project" className={classes.menuButton}>
        PROJECT
      </Button>
      <Button color="inherit" component={Link} to="/company" className={classes.menuButton}>
        COMPANY
      </Button>
      <Button color="inherit" component={Link} to="/university" className={classes.menuButton}>
        UNIVERSITY
      </Button>
    </>
  );
}

function Enterprise() {
  const classes = useStyles();

  return (
    <>
      <Button color="inherit" component={Link} to="/enterprise" className={classes.menuButton}>
        Release Project
      </Button>
      <Button color="inherit" component={Link} to="/enterprise" className={classes.menuButton}>
        ALL PROJECTS
      </Button>
    </>
  );
}

function Navigation(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.nav} alignItems="center" component={Container}>
        <Grid item container xs alignItems="center" className={classes.left}>
          <Grid item component={Link} to="/project">
            <img src="/images/logo.png" height={22} alt="logo" />
          </Grid>
          <Grid item>{props.enterprise ? <Enterprise />: <Normal /> }</Grid>
        </Grid>
        <Grid item container xs alignItems="center" direction="row-reverse" className={classes.right}>
          <Grid item component={Link} to="/enterprise" height={20} className={classes.enterprise}>
            <img src="/images/enterprise.svg" height="100%" alt="enterprise" />
          </Grid>
          <Grid item>
            <AuthInfo />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navigation;
