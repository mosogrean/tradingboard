import {
  Divider, Input, Card, Descriptions, Form,
} from 'antd';
import form from 'antd/lib/form';
import React, { useState, useEffect } from 'react';

const Profit = () => {
  const [formValue, setFormValue] = useState<any>(false);
  const [descDeposit, setDescDeposit] = useState<any>();
  const [form] = Form.useForm();

  useEffect(() => {
    const value: {cash: number; crypto_buy: number; crypto_sale: number; fee: number} = form.getFieldsValue();
    const valFee = (100 - value.fee) / 100;
    const amount = (value.cash * valFee) / value.crypto_buy;
    const receive = (amount * value.crypto_sale) * valFee;
    const profit = receive - value.cash;
    setDescDeposit({
      amount,
      receive,
      profit,
    });
  }, [formValue]);

  return (
    <>
      <Divider>กำไร</Divider>
      <Form
        layout="vertical"
        form={form}
        initialValues={{ fee: 0.25 }}
      >
        <Form.Item
          label="จำนวนเงินที่ต้องการซื้อ"
          rules={[{ required: true }]}
          name="cash"
        >
          <Input type="number" inputMode="decimal" step="any" onChange={() => { setFormValue(!formValue); }} />
        </Form.Item>
        <Form.Item
          label="ราคาซื้อ crypto"
          rules={[{ required: true }]}
          name="crypto_buy"
        >
          <Input type="number" inputMode="decimal" step="any" onChange={() => { setFormValue(!formValue); }} />
        </Form.Item>
        <Form.Item
          label="ราคาขาย crypto"
          rules={[{ required: true }]}
          name="crypto_sale"
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
              descDeposit?.amount ? (
                <Card style={{ marginTop: 10 }}>
                  <Descriptions layout="vertical">
                    <Descriptions.Item label="เหรียญที่ได้ทั้งหมด">{descDeposit?.amount || null}</Descriptions.Item>
                    <Descriptions.Item label="ขายแล้วจะได้">{descDeposit?.receive || null}</Descriptions.Item>
                    <Descriptions.Item label="เป็นกำไรสุทธิ">{descDeposit?.profit || null}</Descriptions.Item>
                  </Descriptions>
                </Card>
              ) : null
            }
    </>
  );
};

export default Profit;
