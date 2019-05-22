import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 30px',
    backgroundColor: '#323B54',
    borderRadius: '14px',
    padding: '0 10px',
  },
  menuButton: {
    lineHeight: '24px',
    fontSize: '12px',
    color: '#C1C6D4',
    padding: '0 7px',
    textDecoration: 'none'
  },
  divider: {
    color: '#0A1433',
    width: 1,
    height: 10
  }
}));


export default function AuthInfo() {
  const classes = useStyles();

  const [username, setUsername] = React.useState(() => {
    return localStorage.getItem("username");
  });

  const logout = () => {
    localStorage.removeItem("username");
    setUsername("");
  }

  if (username) {
    return <Profile logout={logout}/>
  }

  return (
    <div className={classes.root}>
      <Link to='/passport/login' className={classes.menuButton}>
        Login
      </Link>
      <span className={classes.divider}>|</span>
      <Link to='/passport/register' className={classes.menuButton}>
        Register
      </Link>
    </div>
  );
}
