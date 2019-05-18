import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Navigation from "./Navigation";
import Project from "./Project";
import Company from "./Company";
import Enterprise from "./Enterprise";
import University from "./University";

function AppRouter() {
  return (
    <Router>
      <CssBaseline />
      <Navigation />
      <Container fixed>
        <Typography component={Switch}>
          <Route path="/" exact component={Project} />
          <Route path="/project" component={Project} />
          <Route path="/company" component={Company} />
          <Route path="/university" component={University} />
          <Route path="/enterprise" component={Enterprise} />
        </Typography>
      </Container>
    </Router>
  );
}

export default AppRouter;
