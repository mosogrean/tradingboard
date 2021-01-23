import RouteItem from '../router';

export interface RouteList {
  login: RouteItem;
}

const mainLink = '/tradingboard/login';

const R: RouteList = {
  login: {
    link: `${mainLink}`,
    name: 'Login',
  },
};

export default R;
