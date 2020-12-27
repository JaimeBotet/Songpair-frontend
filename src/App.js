import React from 'react';
import {Switch, Route } from 'react-router-dom';

import WelcomeContainer from "./redux/containers/pages/WelcomeContainer";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import RegisterContainer from "./redux/containers/pages/RegisterContainer";
import MapContainer from "./redux/containers/pages/MapContainer";
import DashboardContainer from "./redux/containers/pages/DashboardContainer";
import ProfileContainer from "./redux/containers/pages/ProfileContainer";
import ChatsContainer from "./redux/containers/pages/ChatsContainer";
import ChatRoomContainer from "./redux/containers/pages/ChatRoomContainer";

import ROUTES from "./utils/routes";

// import chatsListener from "./utils/chatsListener";

import io from "socket.io-client";

import {apiDomain} from './config/config';

const ENDPOINT = apiDomain;

const socket = io(ENDPOINT, {withCredentials: true});
socket.onAny((eventName, ...args) => {
    if(eventName === 'connection'){
        alert("A User wants to chat with you");
        //here we filter with the user
    }
});

function App() {
  return (
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <WelcomeContainer />
        </Route>
        <Route path={ROUTES.LOGIN}>
          <LoginContainer />
        </Route>
        <Route path={ROUTES.DASHBOARD}>
          <DashboardContainer />
        </Route>
        <Route path={ROUTES.PROFILE + ":id"}>
          <ProfileContainer />
        </Route>
        <Route path={ROUTES.MAP}>
          <MapContainer />
        </Route>
        <Route path={ROUTES.REGISTER}>
          <RegisterContainer />
        </Route>
        <Route path={ROUTES.ROOMS}>
          <ChatsContainer />
        </Route>
        <Route path={ROUTES.CHAT + ":roomId"}>
          <ChatRoomContainer />
        </Route>
      </Switch>
  );
}

export default App;
