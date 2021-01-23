import React, { ReactElement } from 'react';
import './App.less';
import {
  HashRouter as Router, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GuestRouter from './routers/guest/GuestRouter';
import InvestorRouter from './routers/investor/InvestorRouter';

const history = createBrowserHistory();

function App(): ReactElement {
  return (
    <Router basename="tradingboard">
      {GuestRouter}
      {InvestorRouter}
    </Router>
  );
}

export default App;
