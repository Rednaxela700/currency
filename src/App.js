import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Favourites from './components/pages/Favourites';
import Main from './components/pages/Main';
import CurrenciesState from './context/currencies/currenciesState';
import ModalState from './context/modal/modalState';
import { ROUTE_FAVOURITES, ROUTE_MAIN } from './routes';

const App = () => (
  <CurrenciesState>
    <ModalState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={ROUTE_MAIN}>
            <Main />
          </Route>
          <Route exact path={ROUTE_FAVOURITES}>
            <Favourites />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </ModalState>
  </CurrenciesState>
);

export default App;
