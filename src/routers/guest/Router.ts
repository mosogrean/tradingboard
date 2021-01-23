import RouteItem from '../router';

export interface RouteList {
  login: RouteItem;
}

const mainLink = '/login';

const R: RouteList = {
  login: {
    link: `${mainLink}`,
    name: 'Login',
  },
};

export default R;
