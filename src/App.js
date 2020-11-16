import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './routers/Auth'

function App() {
  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <h1>TEST</h1>
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
