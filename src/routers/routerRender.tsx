import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LayoutRoute from '../layout/LayoutRoute';

export interface IRouterRender {
  link: string;
  layout: React.FC<{}>;
  component: React.FC<{}>;
}

export const RouterRender = (
  routers: Array<IRouterRender>,
): any => routers.map(
  (router: IRouterRender) => (
    <LayoutRoute
      exact
      path={router.link}
      layout={router.layout}
      component={router.component}
      key={uuidv4()}
    />
  ),
);
