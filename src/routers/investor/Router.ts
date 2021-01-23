import RouteItem from '../router';

export interface RouteList {
  index: RouteItem;
  cryptoSymbol: RouteItem;
  tradingViewer: RouteItem;
}

const mainLink = '#';

const R: RouteList = {
  index: {
    link: '/',
    name: 'Investor',
  },
  cryptoSymbol: {
    link: '/crypto/symbol/:Symbol',
    name: 'Crypto',
  },
  tradingViewer: {
    link: '/crypto/tradingviewer',
    name: 'TradingViewer',
  },
};

export default R;
