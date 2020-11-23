import React from 'react';
import {Switch, Route } from 'react-router-dom';

import WelcomeContainer from "./redux/containers/pages/WelcomeContainer";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import RegisterContainer from "./redux/containers/pages/RegisterContainer";
import MapContainer from "./redux/containers/pages/MapContainer";
import ChatContainer from "./redux/containers/pages/ChatContainer";

import ROUTES from "./utils/routes";

function App() {
  return (
    <Router>
        <Switch>
          <Route path={ROUTES.HOME}>
            <WelcomeContainer />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <LoginContainer />
          </Route>
          <Route path={ROUTES.MAP}>
            <MapContainer />
          </Route>
          <Route path={ROUTES.REGISTER}>
            <RegisterContainer />
          </Route>
          <Route path={ROUTES.CHAT}>
            <ChatContainer />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
