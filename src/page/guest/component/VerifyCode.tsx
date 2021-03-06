import { Input, Button, Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import React from 'react';

interface VerifyCodeProps {
  show: boolean;
  form: FormInstance;
  toggle: () => any;
  toggleBack: () => any;
}

const VerifyCode: React.FC<VerifyCodeProps> = ({ show, form, toggle, toggleBack }): JSX.Element => {
  const goBack = () => {
    toggleBack();
  };

  const verifyHandle = () => {
    toggle();
  };

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Verify Code"
          name="code"
          rules={[{ required: show, message: 'Please input your code!' }]}
        >
          <Input />
        </Form.Item>
        <div>
          <Button type="ghost" onClick={goBack} style={{ float: 'left' }}>
            Back
          </Button>
          <Button type="primary" onClick={verifyHandle}>
            Verify
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default VerifyCode;
