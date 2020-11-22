import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Map from './routers/Map';
import Auth from './routers/Auth'
import Home from './routers/Home'

import ROUTES from "./utils/routes";

function App() {
  return (
    <Router>
        <Switch>

          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>

          <Route path={ROUTES.LOGIN}>
            <Auth />
          </Route>

          <Route path={ROUTES.LOGIN}>
            <Map />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
