import { Switch, Route } from 'react-router-dom';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

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