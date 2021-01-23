import React from 'react';
import R from './Router';
import Index from '../../page/investor/Index';
import { RouterRender } from '../routerRender';
import MainLayout from '../../layout/MainLayout';
import CryptoSymbol from '../../page/investor/CryptoSymbol';
import CryptoTradingViewer from '../../page/investor/CryptoTradingViewer';

export default RouterRender([
  {
    link: R.index.link,
    layout: MainLayout,
    component: Index,
  },
  {
    link: R.cryptoSymbol.link,
    layout: MainLayout,
    component: CryptoSymbol,
  },
  {
    link: R.tradingViewer.link,
    layout: MainLayout,
    component: CryptoTradingViewer,
  },
]);
