import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';

import Navigation from './Navigation';
import Project from './Project';
import Company from './Company';
import Enterprise from './Enterprise';
import University from './University';
import PassportRouter from './passport/PassportRouter';
import Footer from './Footer';

function PublicRouter(props) {
  const banner = props.enterprise ? '/images/banner_company.png' : '/images/banner.png';

  return (
    <>
      <Container fixed>
        <img src={banner} alt="banner" width="100%" />
        <Route path="/" exact component={Project} />
        <Route path="/project" component={Project} />
        <Route path="/company" component={Company} />
        <Route path="/university" component={University} />
        <Route path="/enterprise" component={Enterprise} />
      </Container>
    </>
  );
}

const PageRouter = withRouter(props => {
  const passport = props.location.pathname.startsWith('/passport');
  const enterprise = props.location.pathname.startsWith('/enterprise');
  const [username, setUsername] = React.useState(() => {
    return localStorage.getItem("username");
  });

  const updateUsername = username => {
    if (username) {
      localStorage.setItem("username", username)
    } else {
      localStorage.removeItem("username");

    }
    setUsername(username);
  }

  //logo.png
  return (
    <>
      <Navigation enterprise={enterprise} username={username} setUsername={updateUsername} />
      {passport ? <PassportRouter setUsername={updateUsername} /> : <PublicRouter enterprise={enterprise} />}
      {!passport && <Footer />}
    </>
  );
});

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <Router>
        <CssBaseline />
        <PageRouter />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
