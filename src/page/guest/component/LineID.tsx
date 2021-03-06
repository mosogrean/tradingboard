import { Input, Button, Form } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import React from 'react';

interface LineIDProps {
  show: boolean;
  form: FormInstance;
  toggle: () => any;
}

const LineID: React.FC<LineIDProps> = ({
  show, form, toggle,
}): JSX.Element => {
  const onFinish = async (): Promise<void> => {
    await form.validateFields();
    toggle();
  };

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Form
        form={form}
        style={{ width: '100%' }}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: show, message: 'Please input your user account!' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" onClick={onFinish}>
          Send Verify Code
        </Button>
      </Form>
    </div>
  );
};

export default LineID;
