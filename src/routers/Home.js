import { Switch, Route } from 'react-router-dom';
import Welcome from '../views/home/Welcome';

function Home() {
  return (
    <Switch>

      <Route exact path="/">
        <Welcome />
      </Route>

    </Switch>
  );
}

export default Home;