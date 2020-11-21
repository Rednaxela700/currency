import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ROUTE_FAVOURITES, ROUTE_MAIN } from './routes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTE_MAIN}></Route>
      <Route exact path={ROUTE_FAVOURITES}></Route>
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
