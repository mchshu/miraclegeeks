import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import UpdateIcon from "@material-ui/icons/Update";
import Pagination from "material-ui-flat-pagination";

const data = [];

for (let i = 0; i < 59; i++) {
  data.push({
    id: i,
    name: "e-commerce website of medicine " + i,
    avatar: "/images/company.png",
    description: "This is a brief description of the project, no more than one lines.",
    period: i + 1
  });
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  bigAvatar: {
    margin: "0 20px",
    width: 90,
    height: 90
  },
  intro: {
    display: "flex"
  },
  detail: {
    color: "#FFFFFF",
    background: "#6D6D6D",
    "&:hover": {
      background: "#EDBB18"
    }
  }
}));

function Enterprise() {
  const classes = useStyles();
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const enterprises = data.slice(offset, offset + limit);

  return (
    <>
      <List className={classes.root}>
        {enterprises.map(project => {
          return (
            <React.Fragment key={project.id}>
              <ListItem alignItems="flex-start">
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
                      <UpdateIcon fontSize="small" style={{ verticalAlign: "bottom" }} /> period:{" "}
                      <span style={{ color: "green" }}>{project.period} days</span>
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
                      className={classes.detail}
                    >
                      View Details
                    </Fab>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
      <Pagination
        limit={limit}
        offset={offset}
        total={data.length}
        onClick={(e, offset) => setOffset(offset)}
        style={{ textAlign: "center" }}
      />
    </>
  );
}

export default Enterprise;
