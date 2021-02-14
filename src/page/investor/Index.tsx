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
import { Redirect } from 'react-router';
import R from '../../routers/investor/Router';
import './less/index.less';
import Formular from './component/Formular';
import { useQuery, gql } from '@apollo/client';

const columns = [
  {
    title: 'สกุลเงิน',
    dataIndex: 'title',
    key: 'title',
    render: (elem: string): JSX.Element => (<strong>{elem.toUpperCase()}</strong>),
  },
  {
    title: '',
    dataIndex: 'symbol',
    key: 'symbol',
    render: (elem: string): JSX.Element => (<strong>{elem.toUpperCase()}</strong>),
  },
];

// export const CryptoSymbolData = [
//   {
//     key: '1',
//     title: 'BITCOIN',
//     crypto: 'BTC_THB',
//   }, {
//     key: '2',
//     title: 'ETHREUM',
//     crypto: 'ETH_THB',
//   },
//   {
//     key: '3',
//     title: 'XRP',
//     crypto: 'XRP_THB',
//   },
//   {
//     key: '4',
//     title: 'OMG',
//     crypto: 'OMG_THB',
//   },
// ];

const GET_SYMBOL_CRYPTO = gql`
  query {
    symbol_crypto {
      title
      symbol
      status
    }
  }
`;

const Index: React.FC = (): JSX.Element => {
  const [resetTable, setResetTable] = useState(false);
  const [formValue, setFormValue] = useState<any>(false);
  const [descDeposit, setDescDeposit] = useState<any>();
  const [goToPath, setGoToPath] = useState<JSX.Element>();

  const symbolCryptos = useQuery(GET_SYMBOL_CRYPTO);

  const CryptoSymbolList = symbolCryptos.data?.symbol_crypto?.map((val: any, index: number) => ({
    key: index,
    ...val,
  }));

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
      {goToPath || null}
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
            extra={(
              <>
                <Button
                  type="link"
                  onClick={() => {
                    setGoToPath(<Redirect to={R.tradingViewer.link} />);
                  }}
                >
                  view tradingviwer
                </Button>
              </>
          )}
          >
            <Table
              className="table-check"
              columns={columns}
              dataSource={CryptoSymbolList}
              onRow={(record, rowIndex) => ({
                onClick: (): void => {
                  setGoToPath(<Redirect to={R.cryptoSymbol.link.replace(':Symbol', record.symbol.toUpperCase())} />);
                }, // click row
              })}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card title="คำนวน">
            <Formular />
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
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
