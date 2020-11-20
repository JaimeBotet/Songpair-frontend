import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './routers/Auth'
import Home from './routers/Home'
import Map from './routers/Map'

function App() {
  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

          <Route path="/map">
            <Map />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
