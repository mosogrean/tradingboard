import React from 'react';
import {
  Layout, Menu, Breadcrumb, Button,
} from 'antd';
import { Link } from 'react-router-dom';
import R from '../routers/investor/Router';

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
            <Button type="link">Login</Button>
          </div>
        </Menu>
      </Header>
      <hr />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>MosoLab ©2021</Footer>
    </Layout>
  );
};

export default MainLayout;
