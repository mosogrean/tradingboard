import React from 'react';
import {
  Layout, Menu, Breadcrumb, Button,
} from 'antd';
import { Link } from 'react-router-dom';
import R from '../routers/investor/Router';
import RLogin from '../routers/guest/Router';
import './less/main-layout.less';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = (props): JSX.Element => {
  const { children } = props;
  return (
    <Layout className="layout">
      <Header style={{ background: '#FFF' }}>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to={R.index.link}>Investor</Link></Menu.Item>
          <div style={{ float: 'right' }}>
            {
              window.localStorage.getItem('username')
                ? (
                  <Button
                    type="link"
                    onClick={() => {
                      window.localStorage.removeItem('username');
                      window.localStorage.removeItem('authorization');
                      window.location.reload();
                    }}
                  >
                    {window.localStorage.getItem('username')}
                  </Button>
                )
                : <Button type="link"><Link to={RLogin.login.link}>Login</Link></Button>
            }
          </div>
        </Menu>
      </Header>
      <hr />
      <Content>
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        MosoLab ©2021
        Tradingboard
        {' '}
        {process.env.REACT_APP_VERSION}
      </Footer>
    </Layout>
  );
};

export default MainLayout;
