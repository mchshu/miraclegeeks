import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import AuthInfo from "./AuthInfo";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menu: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
      <Button color="inherit" component={Link} to="/university">
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
      <Button color="inherit" component={Link} to="/enterprise">
        ALL PROJECTS
      </Button>
    </>
  );
}

function Navigation(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.menu}>
            <IconButton
              edge="start"
              component={Link}
              to="/"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            {props.enterprise ? <Enterprise /> : <Normal />}
          </Box>
          {props.enterprise ? null : <AuthInfo />}
          <Button variant="outlined" color="inherit" component={Link} to="/enterprise">
            Enterprise
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
