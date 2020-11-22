import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Map from './routers/Map';
import Auth from './routers/Auth';
import Home from './routers/Home';

import HomeContainer from "./redux/containers/pages/HomeContainer";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import RegisterContainer from "./redux/containers/pages/RegisterContainer";
import MapContainer from "./redux/containers/pages/MapContainer";
import ChatContainer from "./redux/containers/pages/ChatContainer";

import ROUTES from "./utils/routes";

function App() {
  return (
    <Router>
        <Switch>

          <Route exact path={ROUTES.HOME}>
            {/* <Home /> */}
            <HomeContainer />
          </Route>

          <Route path={ROUTES.LOGIN}>
            {/* <Auth /> */}
            <LoginContainer />
          </Route>

          <Route path={ROUTES.MAP}>
            {/* <Map /> */}
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
