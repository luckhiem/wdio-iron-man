import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ConfigFile = () => {
  return (
    <Form {...layout} name="nest-messages" style={{ padding: '24px' }}>
      <Form.Item name={['user', 'configFile']} label="Config Files">
        <Input disabled={true}/>
      </Form.Item>
      <Form.Item name={['user', 'testCommand']} label="Test Command">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'specFiles']} label="Spec Files">
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'capabilities']} label="Capabilities">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Run Test
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfigFile;