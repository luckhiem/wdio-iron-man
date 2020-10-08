import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Row, Col } from 'antd';
import AddProject from './components/AddProject';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class App1 extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header">
            <Row>
              <Col span={22}>
                <h1>Project Details</h1>
              </Col>
              <Col span={2}>
                <AddProject />
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '100vh' }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App1;