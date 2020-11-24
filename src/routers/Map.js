import { Switch, Route } from 'react-router-dom';
import MapView from '../views/map/Map';

function Map() {
  return (
    <Switch>

      <Route exact path="/map">
        <MapView />
      </Route>

    </Switch>
  );
}

export default Map;
