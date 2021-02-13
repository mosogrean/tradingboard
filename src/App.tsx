import React, { ReactElement } from 'react';
import './App.less';
import {
  BrowserRouter, HashRouter, Redirect, Router, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GuestRouter from './routers/guest/GuestRouter';
import InvestorRouter from './routers/investor/InvestorRouter';

const clientApollo = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND}/api/v1/graph`,
  cache: new InMemoryCache(),
});

const history = createBrowserHistory();

function App(): ReactElement {
  return (
    <ApolloProvider client={clientApollo}>
      <HashRouter>
        {GuestRouter}
        {InvestorRouter}
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
