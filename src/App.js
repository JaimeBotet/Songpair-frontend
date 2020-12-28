import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import io from "socket.io-client";

import WelcomeContainer from "./redux/containers/pages/WelcomeContainer";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import RegisterContainer from "./redux/containers/pages/RegisterContainer";
import MapContainer from "./redux/containers/pages/MapContainer";
import DashboardContainer from "./redux/containers/pages/DashboardContainer";
import ProfileContainer from "./redux/containers/pages/ProfileContainer";
import ChatsContainer from "./redux/containers/pages/ChatsContainer";
import ChatRoomContainer from "./redux/containers/pages/ChatRoomContainer";

import ROUTES from "./utils/routes";
import {apiDomain} from './config/config';

function App() {
  const { user } = useSelector((state) => state);

  const socket = user.currentUser.token ? io(apiDomain, {withCredentials: true, query: `token=${user.currentUser.token}`}) : null;

  if (socket) {
    socket.on('newMessage', async ({ sender }) => {
      console.log(`New chat request from ${sender}!`);
    });
  }

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
          <MapContainer appSocket={socket} />
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
