import { Switch, Route } from 'react-router-dom';
import Map from '../views/auth/Login';

function Auth() {
  return (
    <Switch>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/login/register">
        <Register />
      </Route>

    </Switch>
  );
}

export default Auth;