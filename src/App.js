import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";

import Navigation from "./Navigation";
import Project from "./Project";
import Company from "./Company";
import Enterprise from "./Enterprise";
import University from "./University";
import PassportRouter from "./passport/PassportRouter";

function PublicRouter() {
  return (
    <Container fixed style={{ margin: "30px auto" }}>
      <Route path="/" exact component={Project} />
      <Route path="/project" component={Project} />
      <Route path="/company" component={Company} />
      <Route path="/university" component={University} />
      <Route path="/enterprise" component={Enterprise} />
    </Container>
  );
}

const PageRouter = withRouter(props => {
  return props.location.pathname.startsWith("/passport") ? <PassportRouter /> : <PublicRouter />;
});

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
    >
      <Router>
        <CssBaseline />
        <Navigation />
        <PageRouter />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
