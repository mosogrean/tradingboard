import React, { ReactElement } from 'react';
import './App.less';
import { BrowserRouter, Redirect, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GuestRouter from './routers/guest/GuestRouter';
import InvestorRouter from './routers/investor/InvestorRouter';

const history = createBrowserHistory();

function App(): ReactElement {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          {GuestRouter}
          {InvestorRouter}
        </Switch>
      </BrowserRouter>
    </Router>
  );
}

export default App;
