import React from 'react';
import R from './Router';
import Index from '../../page/guest/Index';
import { RouterRender } from '../routerRender';
import LoginLayout from '../../layout/LoginLayout';

export default RouterRender([
  {
    link: R.login.link,
    layout: LoginLayout,
    component: Index,
  },
]);
