import {
  Button, InputNumber, Select, Space, Typography,
} from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { TradingAPI, ResolutionType, SymbolType } from '../../../api/bitkub';

const { Option, OptGroup } = Select;

const { Text } = Typography;

const timeConverter = (UNIX_timestamp: any): string => {
  const a = new Date(UNIX_timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
  return time;
};

interface LineBTCProps {
  symbol: string;
}

const LineBTC: React.FC<LineBTCProps> = ({ symbol }): JSX.Element => {
  const [stateLabels, setStateLabels] = useState([]);
  const [stateData, setStateData] = useState([]);

  const [resolution, setResolution] = useState<ResolutionType>('15');
  const [periodOfTime, setPeriodOfTime] = useState(1);

  const setData = (): void => {
    const unixTime = moment().unix();
    TradingAPI(symbol as SymbolType, resolution, unixTime - periodOfTime * 43200, unixTime).then((result: any) => {
      setStateLabels(result.t.map((unix: any) => timeConverter(unix)).concat([null, null, null, null]));
      setStateData(result.c);
    });
  };

  useEffect(() => {
    setData();
  }, []);

  const state = {
    labels: stateLabels,
    datasets: [
      {
        label: 'Trading Line',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: stateData,
      },
    ],
  };

  return (
    <div>
      <Space style={{ marginBottom: '2%' }}>
        <Text>ระยะต่อ 1 ช่อง:</Text>
        <Select
          defaultValue="15"
          style={{ width: 120 }}
          onChange={(value: any) => {
            setResolution(value);
          }}
        >
          <OptGroup label="นาที">
            <Option value="1">1 นาที</Option>
            <Option value="5">5 นาที</Option>
            <Option value="15">15 นาที</Option>
            <Option value="30">30 นาที</Option>
          </OptGroup>
          <OptGroup label="ชั่วโมง">
            <Option value="60">1 ชั่วโมง</Option>
            <Option value="240">4 ชั่วโมง</Option>
          </OptGroup>
          <OptGroup label="วัน">
            <Option value="1D">1 วัน</Option>
          </OptGroup>
        </Select>
        <Text>ช่วงเวลาทั้งหมด: </Text>
        <InputNumber min={1} max={30} defaultValue={1} onChange={(value: any) => { setPeriodOfTime(value); }} />
        <Text>วัน</Text>
        <Button
          type="primary"
          onClick={(): void => {
            setData();
          }}
        >
          ปรับค่า
        </Button>
      </Space>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Price value per Time',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default LineBTC;
