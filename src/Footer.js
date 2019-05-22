import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Gird from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '43px 0 20px'
  },
  copyRight: {
    marginTop: '35px',
    fontSize: '10px',
    fontFamily: 'Avenir-Light',
    fontWeight: 300,
    color: 'rgba(135,135,135,1)',
    lineHeight: '14px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Gird container className={classes.root} justify='center' alignItems='center' direction='column'>
      <Gird item>
        <img width={117} height={38} src='/images/logo_footer.png' alt='logo' />
      </Gird>
      <Gird item className={classes.copyRight} component='span'>
        Copyright © 2019 search for project
      </Gird>
    </Gird>
  );
}
