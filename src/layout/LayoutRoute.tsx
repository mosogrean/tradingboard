import React, { ReactElement, FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: any;
  layout: any;
  // All other props
  [x: string]: any;
};

const LayoutRoute: FunctionComponent<Props> = ({ component: Component, layout: Layout, ...rest }): ReactElement => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default LayoutRoute;
