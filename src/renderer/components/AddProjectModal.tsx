import React, { useState } from 'react';
import {
    Form,
    Upload,
    Input,
    Modal,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const normFile = (e: any) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const AddProject = ({ isVisible = false, onClose }: {
    isVisible?: boolean;
    onClose?: () => void;
    saveSetting?: (settingData: any) => void;
}) => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Modal
            visible={isVisible}
            title="Add New Project"
            okText="Create"
            cancelText="Cancel"
            forceRender={true}
            onCancel={() => {
                form.resetFields();
                onClose && onClose();
            }}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        console.log(values)
                        onClose && onClose();
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                form={form}
                initialValues={{
                    projectName: "",
                    projectFile: ""
                }}
            >
                <Form.Item
                    label="Project name"
                    name="projectName"
                    rules={[{ required: true, message: 'Please input your project name!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Upload project">
                    <Form.Item name="projectFile" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="https://run.mocky.io/v3/c3aec9ea-e084-48f9-bbb2-ce04251a2aa1" directory>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag folder to this area to upload</p>                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddProject