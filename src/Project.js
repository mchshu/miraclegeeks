import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
import Pagination from 'material-ui-flat-pagination';
import Axios from 'axios';
import { withSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  item: {
    '&:hover': {
      boxShadow: '0px 0px 14px 0px rgba(198,215,234,1)'
    }
  },
  bigAvatar: {
    margin: '0 20px',
    width: 90,
    height: 90
  },
  intro: {
    display: 'flex'
  },
  detail: {
    color: '#FFFFFF',
    background: '#6D6D6D',
    '&:hover': {
      background: '#EDBB18'
    }
  }
}));

function Project(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = props;
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [response, setResponse] = useState({ total: 0, projects: [] });

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.post('/api/publicProjects', { page: offset / limit + 1, perPage: limit });
        const data = response.data;
        if (data.errcode && data.errcode > 0) {
          enqueueSnackbar(data.errmsg, { variant: 'error' });
        } else {
          setResponse(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [offset, enqueueSnackbar]);
  const projects = response.projects || [];

  return (
    <>
      <List className={classes.root}>
        {projects.map(project => {
          return (
            <React.Fragment key={project.id}>
              <ListItem alignItems="flex-start" className={classes.item}>
                <ListItemAvatar>
                  <Avatar alt={project.name} src={project.avatar} className={classes.bigAvatar} />
                </ListItemAvatar>
                <Grid container spacing={2} alignItems="center" justify="space-between">
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {project.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: 20 }}>
                      <UpdateIcon fontSize="small" style={{ verticalAlign: 'bottom' }} /> period:{' '}
                      <span style={{ color: 'green' }}>{project.period} days</span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Fab
                      variant="extended"
                      size="medium"
                      color="inherit"
                      aria-label="View"
                      component={Link}
                      to="/enterprise/detail"
                      className={classes.detail}>
                      View Details
                    </Fab>
                  </Grid>
                </Grid>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
      <Pagination
        limit={limit}
        offset={offset}
        total={response.total}
        onClick={(e, offset) => setOffset(offset)}
        style={{ textAlign: 'center' }}
      />
    </>
  );
}

export default withSnackbar(Project);
