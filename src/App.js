import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './routers/Auth'
import Home from './routers/Home'

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

        </Switch>
      </Router>
  );
}

export default App;
