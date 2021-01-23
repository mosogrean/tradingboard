import RouteItem from '../router';

export interface RouteList {
  index: RouteItem;
  cryptoSymbol: RouteItem;
  tradingViewer: RouteItem;
}

const mainLink = '/tradingboard/';

const R: RouteList = {
  index: {
    link: `${mainLink}/`,
    name: 'Investor',
  },
  cryptoSymbol: {
    link: `${mainLink}/crypto/symbol/:Symbol`,
    name: 'Crypto',
  },
  tradingViewer: {
    link: `${mainLink}/crypto/tradingviewer`,
    name: 'TradingViewer',
  },
};

export default R;
