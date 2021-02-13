import {
  faMoneyBillAlt, faClock, faCommentAlt, faBellSlash, faBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Divider, Row, Col, Radio, Input, DatePicker, Space, Badge, Card, Button, Modal, Descriptions,
} from 'antd';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import {
  SymbolType, TradingAPI, TradingNowAPI, TradingTimeSelectAPI,
} from '../../../api/bitkub';

interface TickerFormProps {
  symbol: string;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IInputPrice {
  price: number;
  threshold: number;
}

interface IInputMain {
  notification_times: number;
  detail: string;
}

const TickerForm: React.FC<TickerFormProps> = ({ symbol }): JSX.Element => {
  const [type, setType] = useState('purchase_price');
  const [showPriceOrPoint, setshowPriceOrPoint] = useState('price');
  const [inputPrice, setInputPrice] = useState<IInputPrice>({} as IInputPrice);
  const [inputMain, setInputMain] = useState<IInputMain>({} as IInputMain);
  const [point1, setPoint1] = useState({
    date: '', unix: 0, price: 0,
  });
  const [point2, setPoint2] = useState({
    date: '', unix: 0, price: 0,
  });

  const [visibleModal, setVisibleModal] = useState(false);

  const RadioOnClineHandle = (e: any, show: string) => {
    setshowPriceOrPoint(show);
    setType(e.target.value);
  };

  useEffect(() => {
    const time = new Date(point1.date).getTime() / 1000;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(time) && point1.unix === 0) {
      const unixTime = moment.unix(time).unix();
      TradingTimeSelectAPI(symbol as SymbolType, unixTime).then((result: any) => {
        setPoint1({ ...point1, price: result.c[0] });
      });
    }
  }, [point1.date]);

  useEffect(() => {
    const time = new Date(point1.date).getTime() / 1000;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(time) && point2.unix === 0) {
      const unixTime = moment.unix(time).unix();
      TradingTimeSelectAPI('BTC_THB', unixTime).then((result: any) => {
        setPoint2({ ...point2, price: result.c[0] });
      });
    }
  }, [point1.date]);

//   `{
//   symbol: 'XLM',
//   price: 9.33,
//   threshold: 0.02,
//   alert: 'ไปถอน',
//   now: moment().unix(),
// }`
  const handleOk = () => {
    // send api
  };

  const modalDetail = () => {
    switch (type) {
      case 'purchase_price':
        return (
          <>
            <Descriptions title="ราคาที่ต้องการซื้อ" bordered>
              <Descriptions.Item label="ราคาบันทึก" span={3}>{inputPrice.price}</Descriptions.Item>
              <Descriptions.Item label="ราคาแจ้งเตือนระหว่าง" span={3}>
                <Space>
                  {Number(inputPrice.price) + Number(inputPrice.threshold)}
                  ,
                  {inputPrice.price - inputPrice.threshold}
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="แจ้งเตือนทั้งหมด" span={3}>
                {inputMain.notification_times}
              </Descriptions.Item>
              <Descriptions.Item label="รายละเอียดการแจ้งเตือน" span={3}>
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
      <Divider orientation="left">กำหนดรูปแบบ</Divider>
      <Row>
        <Col span={24}>
          <Radio.Group defaultValue="purchase_price" buttonStyle="solid">
            <Radio.Button value="purchase_price" onClick={(e): any => { RadioOnClineHandle(e, 'price'); }}>
              ราคาที่ต้องการ
              <strong>ซื้อ</strong>
            </Radio.Button>
            <Radio.Button value="selling_price" onClick={(e): any => { RadioOnClineHandle(e, 'price'); }}>
              ราคาที่ต้องการ
              <strong>ขาย</strong>
            </Radio.Button>
            <Radio.Button value="support_line" onClick={(e): any => { RadioOnClineHandle(e, 'point'); }}>
              เส้น
              <strong>แนวรับ</strong>
            </Radio.Button>
            <Radio.Button value="resistance_line" onClick={(e): any => { RadioOnClineHandle(e, 'point'); }}>
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
            defaultValue="0"
            prefix={<FontAwesomeIcon icon={faMoneyBillAlt} />}
            addonAfter="บาท"
            allowClear
            type="number"
            onChange={(e: any) => { setInputPrice({ ...inputPrice, price: e.target.value as number }); }}
          />
        </Col>
        <Col span={24}>
          <span>ระดับราคาที่ต้องการแจ้งเตือน (+/-)</span>
          <Input
            defaultValue="0"
            prefix={<FontAwesomeIcon icon={faBell} />}
            addonAfter="บาท"
            allowClear
            type="number"
            onChange={(e: any) => { setInputPrice({ ...inputPrice, threshold: e.target.value as number }); }}
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
            defaultValue={3}
            prefix={<FontAwesomeIcon icon={faClock} />}
            addonAfter="ครั้ง"
            allowClear
            type="number"
            onChange={(e: any) => { setInputMain({ ...inputMain, notification_times: e.target.value }); }}
          />
        </Col>
      </Row>
      <Divider />
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
