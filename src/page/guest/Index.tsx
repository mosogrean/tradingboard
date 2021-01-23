import React, { useState } from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import './less/index.less';
import LineID from './component/LineID';
import VerifyCode from './component/VerifyCode';

const Index: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();
  const [lineidShow, setLineidShow] = useState(true);
  const [verifyCode, setVerifyCode] = useState(false);

  const toggle = () => {
    setLineidShow(!lineidShow);
    setVerifyCode(!verifyCode);
  };

  return (
    <div id="login-form">
      <LineID show={lineidShow} form={form} toggle={(): void => { toggle(); }} />
      <VerifyCode show={verifyCode} form={form} toggle={(): void => { toggle(); }} />
    </div>
  );
};

export default Index;
