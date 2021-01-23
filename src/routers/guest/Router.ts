import RouteItem from '../router';

export interface RouteList {
  login: RouteItem;
}

const mainLink = '/tradingboards/login';

const R: RouteList = {
  login: {
    link: `${mainLink}`,
    name: 'Login',
  },
};

export default R;
