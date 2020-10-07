import React from 'react';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import {
    Form,
    Input,
    Modal,
    Button
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

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
                    <Button icon={<UploadOutlined />} onClick={() => {
                        ipcRenderer.send('show-open-dialog', null);
                        const listener = (event: IpcRendererEvent, response: any) => {
                            console.log(event);
                            ipcRenderer.removeListener('show-open-dialog', listener);
                        }
                        ipcRenderer.on('show-open-dialog', listener);
                    }}>Upload Directory</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddProject