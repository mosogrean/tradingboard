import {
  Divider, Form, Input, Card, Descriptions,
} from 'antd';
import React, { useState, useEffect } from 'react';

const Coins = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState<any>(false);
  const [bahtUse, setBahtUse] = useState<number>(0);

  useEffect(() => {
    const value: {coins: number; crypto_buy: number; fee: number } = form.getFieldsValue();
    const valFee = (100 - value.fee) / 100;
    const baht = (value.coins * value.crypto_buy) / valFee;
    setBahtUse(Math.ceil(baht));
  }, [formValue]);

  return (
    <>
      <Divider>เหรียญ</Divider>
      <Form
        layout="vertical"
        form={form}
        initialValues={{ fee: 0.25 }}
      >
        <Form.Item
          label="จำนวนเหรียญที่ต้องการซื้อ"
          rules={[{ required: true }]}
          name="coins"
        >
          <Input type="number" inputMode="decimal" step="any" onChange={() => { setFormValue(!formValue); }} />
        </Form.Item>
        <Form.Item
          label="ราคาซื้อต่อเหรียญ"
          rules={[{ required: true }]}
          name="crypto_buy"
        >
          <Input type="number" inputMode="decimal" step="any" onChange={() => { setFormValue(!formValue); }} />
        </Form.Item>
        <Form.Item
          label="fee"
          name="fee"
        >
          <Input type="number" inputMode="decimal" step="any" onChange={() => { setFormValue(!formValue); }} />
        </Form.Item>
      </Form>
      {
              bahtUse ? (
                <Card style={{ marginTop: 10 }}>
                  <Descriptions layout="vertical">
                    <Descriptions.Item label="ราคาบาทที่ต้องใช้">
                      {bahtUse || null}
                      {' '}
                      บาท
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              ) : null
            }
    </>
  );
};

export default Coins;
