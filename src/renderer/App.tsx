import React from 'react';
import './app.css';
import { Layout, Menu, Row, Col, Button } from 'antd';
import AddProject from './components/AddProject';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row>
          <Col span={20}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <AddProject />
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '40px', paddingTop: '100px' }}>
        <div className="site-layout-content" style={{ minHeight: '100vh' }}>
          Content
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Design by KhiemLuc</Footer>
    </Layout>
  )
};

export default App;