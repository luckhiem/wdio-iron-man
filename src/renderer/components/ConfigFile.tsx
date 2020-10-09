import React from 'react';
import { Form, Input, Card, Button, Col, Row } from 'antd';
import '../css/ConfigFile.css'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

const ConfigFile = () => {
  return (
    <Form {...layout} name="nest-messages" style={{ padding: '24px' }}>
      <Form.Item name={['user', 'configFile']} label="Config Files">
        <Input disabled={true} />
      </Form.Item>
      <Form.Item name={['user', 'testCommand']} label="Test Command">
        <Input defaultValue={'./node_modules/bin/wdio'}/>
      </Form.Item>
      <Form.Item name={['user', 'specFiles']} label="Spec Files">
        <Input disabled={true} />
      </Form.Item>
      <Form.Item label="Capabilities" wrapperCol={{ span: 16 }}>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Chrome">Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Firefox"> Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Safari">Card content</Card>
            </Col>
          </Row>
        </div>,
        </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Run Test
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfigFile;