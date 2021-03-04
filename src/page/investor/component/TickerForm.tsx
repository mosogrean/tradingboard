/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import {
  faMoneyBillAlt, faClock, faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Divider, Row, Col, Radio, Input, DatePicker, Space, Badge, Card, Button, Modal, Descriptions, Switch,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Redirect } from 'react-router';
import R from '../../../routers/guest/Router';

interface TickerFormProps {
  symbol: string;
  setResetTable: (is: boolean) => any;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IInputPrice {
  price: any;
  threshold: string;
}

interface IInputMain {
  notification_times: any;
  detail: string;
}

const ADD_TICKER = gql`
  mutation crypto_add_symbol_value_check(
    $symbol: String!
    $price: Float!
    $times: Float!
    $alert_msg: String!
  ) {
    crypto_add_symbol_value_check(
      symbol: $symbol, 
      price: $price, 
      times: $times, 
      alert_msg: $alert_msg
    )
}
`;

const GET_MACD = gql`
query Query($macdCryptoSymbol: String!) {
  macd_crypto(symbol: $macdCryptoSymbol) {
    status
  }
}
`;

const UPDATE_MACD = gql`
mutation Update_macd_cryptoMutation($updateMacdCryptoSymbol: String) {
  update_macd_crypto(symbol: $updateMacdCryptoSymbol) {
    symbol
    status
  }
}`;

const TickerForm: React.FC<TickerFormProps> = ({ symbol, setResetTable }): JSX.Element => {
  const [type, setType] = useState('purchase_price');
  const [showPriceOrPoint, setshowPriceOrPoint] = useState('price');
  const [inputPrice, setInputPrice] = useState<IInputPrice>({} as IInputPrice);
  const [inputMain, setInputMain] = useState<IInputMain>({ notification_times: 3 } as IInputMain);
  const getMACD = useQuery(GET_MACD, {
    variables: {
      macdCryptoSymbol: symbol.toLowerCase(),
    },
    context: {
      headers: {
        Authorization: window.localStorage.getItem('authorization'),
      },
    },
  });

  const [setUpdateMACD, updateMACD] = useMutation(UPDATE_MACD, {
    context: {
      headers: {
        Authorization: window.localStorage.getItem('authorization'),
      },
    },
    onCompleted: () => {
      getMACD.refetch();
    },
  });

  const [point1, setPoint1] = useState({
    date: '', unix: 0, price: 0,
  });
  const [point2, setPoint2] = useState({
    date: '', unix: 0, price: 0,
  });

  const [goTo, setGoTo] = useState<JSX.Element>();

  const [visibleModal, setVisibleModal] = useState(false);

  const RadioOnClineHandle = (e: any, show: string) => {
    setshowPriceOrPoint(show);
    setType(e.target.value);
  };

  const [addTicker] = useMutation(ADD_TICKER);

  // useEffect(() => {
  //   const time = new Date(point1.date).getTime() / 1000;
  //   // eslint-disable-next-line no-restricted-globals
  //   if (!isNaN(time) && point1.unix === 0) {
  //     const unixTime = moment.unix(time).unix();
  //     TradingTimeSelectAPI(symbol as SymbolType, unixTime).then((result: any) => {
  //       setPoint1({ ...point1, price: result.c[0] });
  //     });
  //   }
  // }, [point1.date]);

  // useEffect(() => {
  //   const time = new Date(point1.date).getTime() / 1000;
  //   // eslint-disable-next-line no-restricted-globals
  //   if (!isNaN(time) && point2.unix === 0) {
  //     const unixTime = moment.unix(time).unix();
  //     TradingTimeSelectAPI('BTC_THB', unixTime).then((result: any) => {
  //       setPoint2({ ...point2, price: result.c[0] });
  //     });
  //   }
  // }, [point1.date]);

  //   `{
  //   symbol: 'XLM',
  //   price: 9.33,
  //   threshold: 0.02,
  //   alert: 'ไปถอน',
  //   now: moment().unix(),
  // }`
  const handleOk = () => {
    if (!window.localStorage.getItem('authorization')) {
      setGoTo(<Redirect to={R.login.link} />);
    } else {
      switch (type) {
        case 'purchase_price':
          addTicker({
            variables: {
              symbol: symbol.toLowerCase(),
              price: parseFloat(inputPrice.price),
              times: parseFloat(inputMain.notification_times),
              alert_msg: inputMain.detail,
            },
            context: {
              headers: {
                Authorization: window.localStorage.getItem('authorization'),
              },
            },
          });

          break;
        case 'selling_price':
          addTicker({
            variables: {
              symbol: symbol.toLowerCase(),
              price: inputPrice.price,
              times: inputMain.notification_times,
              alert_msg: inputMain.detail,
            },
          });
          break;
        default:
          break;
      }
      setTimeout(() => {
        setVisibleModal(false);
        setResetTable(true);
      }, 1000);
    }
  };

  const modalDetail = () => {
    switch (type) {
      case 'purchase_price':
        return (
          <>
            <Descriptions title="ราคาที่ต้องการซื้อ" bordered>
              <Descriptions.Item label="ราคาบันทึก" span={3}>
                {inputPrice.price}
                {' '}
                บาท
              </Descriptions.Item>
              <Descriptions.Item label="แจ้งเตือนทั้งหมด" span={3}>
                {inputMain.notification_times}
                {' '}
                ครั้ง
              </Descriptions.Item>
              <Descriptions.Item label="ข้อความการแจ้งเตือน" span={3}>
                {inputMain.detail}
              </Descriptions.Item>
            </Descriptions>
          </>
        );
      case 'selling_price':
        return (
          <>
            <Descriptions title="ราคาที่ต้องการขาย" bordered>
              <Descriptions.Item label="ราคาบันทึก" span={3}>
                {inputPrice.price}
                {' '}
              </Descriptions.Item>
              <Descriptions.Item label="แจ้งเตือนทั้งหมด" span={3}>
                {inputMain.notification_times}
                {' '}
                ครั้ง
              </Descriptions.Item>
              <Descriptions.Item label="ข้อความการแจ้งเตือน" span={3}>
                {inputMain.detail}
              </Descriptions.Item>
            </Descriptions>
          </>
        );
      default:
        break;
    }
  };
  return (
    <div>
      {goTo || null}
      <Modal
        title="ตรวจสอบรายการ"
        visible={visibleModal}
        onOk={handleOk}
        onCancel={() => { setVisibleModal(!visibleModal); }}
        okText="บันทึกรายการ"
        cancelText="ยกเลิก"
        width="75%"
      >
        {modalDetail()}
      </Modal>
      <Divider orientation="left">แจ้งเตือนแบบพิเศษ</Divider>
      <Descriptions>
        <Descriptions.Item label="ตัดกันของ MACD" style={{ justifyContent: 'center', display: 'flex' }} span={3}>
          <Switch
            loading={updateMACD.loading}
            checked={getMACD?.data?.macd_crypto?.status === 'active'}
            onChange={(): void => {
              setUpdateMACD({
                variables: {
                  updateMacdCryptoSymbol: symbol.toLowerCase(),
                },
              });
            }}
          />
        </Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">กำหนดรูปแบบ</Divider>
      <Row>
        <Col sm={24} xs={24} md={24} lg={24}>
          <Radio.Group defaultValue="purchase_price" buttonStyle="solid">
            <Radio.Button value="purchase_price" onClick={(e): any => { RadioOnClineHandle(e, 'price'); }}>
              ราคาที่ต้องการ
              <strong>ซื้อ</strong>
            </Radio.Button>
            <Radio.Button value="selling_price" onClick={(e): any => { RadioOnClineHandle(e, 'price'); }}>
              ราคาที่ต้องการ
              <strong>ขาย</strong>
            </Radio.Button>
            <Radio.Button disabled value="support_line" onClick={(e): any => { RadioOnClineHandle(e, 'point'); }}>
              เส้น
              <strong>แนวรับ</strong>
            </Radio.Button>
            <Radio.Button disabled value="resistance_line" onClick={(e): any => { RadioOnClineHandle(e, 'point'); }}>
              เส้น
              <strong>แนวต้าน</strong>
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left">กำหนดราคาหรือตำแหน่งเวลา</Divider>
      <Row style={{ display: showPriceOrPoint === 'price' ? 'block' : 'none' }}>
        <Col span={24}>
          <span>ราคาที่ต้องการแจ้งเตือนต่อหน่วย</span>
          <Input
            prefix={<FontAwesomeIcon icon={faMoneyBillAlt} />}
            addonAfter="บาท"
            allowClear
            type="number"
            onChange={(e: any) => { setInputPrice({ ...inputPrice, price: e.target.value as number }); }}
          />
        </Col>
      </Row>
      <Row style={{ display: showPriceOrPoint === 'point' ? 'block' : 'none' }}>
        <Col span={24}>
          <Space>
            <span>จุดที่ 1:</span>
            <DatePicker showTime onChange={(value: any) => { setPoint1({ ...point1, date: value.format('YYYY-MM-DDTHH:mm:ss') }); }} />
          </Space>
        </Col>
        <br />
        <Col span={24}>
          <span>
            <Badge.Ribbon text="ราคา ณ จุดที่ 1">
              <Card>
                {point1.price}
                {' '}
                บาท
              </Card>
            </Badge.Ribbon>
          </span>
        </Col>
        <br />
        <Col span={24}>
          <Space>
            <span>จุดที่ 2:</span>
            <DatePicker showTime onChange={(value: any) => { setPoint2({ ...point1, date: value.format('YYYY-MM-DDTHH:mm:ss') }); }} />
          </Space>
        </Col>
        <br />
        <Col span={24}>
          <span>
            <Badge.Ribbon text="ราคา ณ จุดที่ 2">
              <Card>
                {point2.price}
                {' '}
                บาท
              </Card>
            </Badge.Ribbon>
          </span>
        </Col>
        <br />
      </Row>
      <Divider orientation="left">การแจ้งเตือน</Divider>
      <Row>
        <Col span={24}>
          <Input
            value={3}
            defaultValue={3}
            prefix={<FontAwesomeIcon icon={faClock} />}
            addonAfter="ครั้ง"
            allowClear
            type="number"
            onChange={(e: any) => { setInputMain({ ...inputMain, notification_times: e.target.value }); }}
          />
        </Col>
      </Row>
      <Divider orientation="left">ข้อความ</Divider>
      <Row>
        <Input
          prefix={<FontAwesomeIcon icon={faCommentAlt} />}
          allowClear
          onChange={(e: any) => { setInputMain({ ...inputMain, detail: e.target.value }); }}
        />
      </Row>
      <br />
      <Row justify="end">
        <Button type="primary" onClick={() => setVisibleModal(!visibleModal)}>บันทึกรายการ</Button>
      </Row>
    </div>
  );
};

export default TickerForm;
