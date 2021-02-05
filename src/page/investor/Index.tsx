import {
  Tag,
  Space,
  Row,
  Card,
  Table,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Descriptions,
} from 'antd';
import React, { useState, useEffect } from 'react';
import R from '../../routers/investor/Router';
import './less/index.less';

const columns = [
  {
    title: 'สกุลเงิน',
    dataIndex: 'title',
    key: 'title',
  },
];

export const CryptoSymbolData = [
  {
    key: '1',
    title: 'BITCOIN',
    crypto: 'BTC_THB',
  }, {
    key: '2',
    title: 'ETHREUM',
    crypto: 'ETH_THB',
  },
  {
    key: '3',
    title: 'XRP',
    crypto: 'XRP_THB',
  },
  {
    key: '4',
    title: 'OMG',
    crypto: 'OMG_THB',
  },
];

const Index: React.FC = (): JSX.Element => {
  const [resetTable, setResetTable] = useState(false);
  const [formValue, setFormValue] = useState<any>(false);
  const [descDeposit, setDescDeposit] = useState<any>();

  const [form] = Form.useForm();

  useEffect(() => {
    const value: {cash: number; crypto_buy: number; crypto_sale: number; fee: number} = form.getFieldsValue();
    const amount = value.cash / value.crypto_buy;
    const receive = (amount) * value.crypto_sale;
    const deposit = (receive - (((amount * value.fee) / 100) + ((receive * value.fee) / 100))) - value.cash;
    setDescDeposit({
      amount,
      receive,
      deposit,
    });
  }, [formValue]);

  return (
    <>
      <Row
        justify="space-around"
        gutter={[16, {
          xs: 8, sm: 16, md: 24, lg: 32,
        }]}
      >
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card
            title="CRYPTOCURRENCY"
            style={{ width: '100%' }}
            extra={(<><Button type="link" href={R.tradingViewer.link}>view tradingviwer</Button></>)}
          >
            <Table
              className="table-check"
              columns={columns}
              dataSource={CryptoSymbolData}
              onRow={(record, rowIndex) => ({
                onClick: (): void => {
                  window.location.href = R.cryptoSymbol.link.replace(':Symbol', record.crypto);
                }, // click row
              })}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card title="คำนวน">
            <Divider>กำไร</Divider>
            <Form
              layout="vertical"
              form={form}
              onFinish={(value: {cash: number; crypto_buy: number; crypto_sale: number; fee: number}): void => {
                const amount = value.cash / value.crypto_buy;
                const receive = (amount) * value.crypto_sale;
                const deposit = (receive - (((amount * value.fee) / 100) + ((receive * value.fee) / 100))) - value.cash;
                setDescDeposit({
                  amount,
                  receive,
                  deposit,
                });
              }}
              initialValues={{ fee: 0.25 }}
            >
              <Form.Item
                label="จำนวนเงินที่ต้องการซื้อ"
                rules={[{ required: true }]}
                name="cash"
              >
                <Input type="number" step="any" onChange={() => { setFormValue(!formValue); }} />
              </Form.Item>
              <Form.Item
                label="ราคาซื้อ crypto"
                rules={[{ required: true }]}
                name="crypto_buy"
              >
                <Input type="number" step="any" onChange={() => { setFormValue(!formValue); }} />
              </Form.Item>
              <Form.Item
                label="ราคาขาย crypto"
                rules={[{ required: true }]}
                name="crypto_sale"
              >
                <Input type="number" step="any" onChange={() => { setFormValue(!formValue); }} />
              </Form.Item>
              <Form.Item
                label="fee"
                name="fee"
              >
                <Input type="number" step="any" onChange={() => { setFormValue(!formValue); }} />
              </Form.Item>
            </Form>
            {
              descDeposit?.amount ? (
                <Card style={{ marginTop: 10 }}>
                  <Descriptions layout="vertical">
                    <Descriptions.Item label="เหรียญที่ได้ทั้งหมด">{descDeposit?.amount || null}</Descriptions.Item>
                    <Descriptions.Item label="ขายแล้วจะได้">{descDeposit?.receive || null}</Descriptions.Item>
                    <Descriptions.Item label="เป็นกำไรสุทธิ">{descDeposit?.deposit || null}</Descriptions.Item>
                  </Descriptions>
                </Card>
              ) : null
            }
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
