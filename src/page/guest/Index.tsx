/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, Checkbox, notification, message,
} from 'antd';
import './less/index.less';
import {
  gql, useLazyQuery, useMutation, useQuery,
} from '@apollo/client';
import { Redirect } from 'react-router';
import LineID from './component/LineID';
import VerifyCode from './component/VerifyCode';
import R from '../../routers/investor/Router';

const LOGIN_USERNAME = gql`
  query login_username($username: String!) {
    login_username(username:$username)
  }
`;

const CHECK_CODE = gql`
  query check_code_by_username($username: String!, $code:String!) {
    check_code_by_username(username: $username, code: $code) {
      access_token
      username
    }
  }
`;

const Index: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();
  const [lineidShow, setLineidShow] = useState(true);
  const [verifyCode, setVerifyCode] = useState(false);

  const [loginUsernameFC, loginUsername] = useLazyQuery(LOGIN_USERNAME);
  const [checkCodeFC, checkCode] = useLazyQuery(CHECK_CODE);

  const [goTo, setGoTo] = useState<JSX.Element>();

  useEffect(() => {
    if (loginUsername.loading) {
      message.info('กรุณาตรวจสอบ code ใน line ของท่าน');
    }
  }, [loginUsername.loading]);

  useEffect(() => {
    if (checkCode.loading) {
      message.info('กำลังทำการตรวจสอบ');
    }
    if (checkCode.data) {
      message.success('login สำเร็จ');
      window.localStorage.setItem('authorization', `Bearer ${checkCode.data?.check_code_by_username.access_token}`);
      window.localStorage.setItem('username', `${checkCode.data?.check_code_by_username.username}`);
      setTimeout(() => {
        setGoTo(<Redirect to={R.index.link} />);
      }, 1000);
    }
  }, [checkCode.loading]);

  // {
  //   "username": "",
  //   "code": ""
  // }
  // const [loginUsername, { loading, error, data }] = useQuery(LOGIN_USERNAME, {
  //   // variables: { username: 'mosogrean' },
  //   // context: {
  //   //   headers: {
  //   //     'Auth': 'application/json',
  //   //   },
  //   // },
  // });

  const toggle = (number: number) => {
    const value = form.getFieldsValue();
    switch (number) {
      case 1:
        loginUsernameFC({ variables: { username: value.username } });
        break;
      case 2:
        checkCodeFC({
          variables: {
            username: value.username,
            code: value.code,
          },
        });
        break;
      default:
        break;
    }
    setLineidShow(!lineidShow);
    setVerifyCode(!verifyCode);
  };

  return (
    <div id="login-form">
      {goTo || null}
      <LineID show={lineidShow} form={form} toggle={(): void => { toggle(1); }} />
      <VerifyCode show={verifyCode} form={form} toggle={(): void => { toggle(2); }} toggleBack={(): void => { toggle(3); }} />
    </div>
  );
};

export default Index;
