/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'วันที่สร้าง',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'รูปแบบ',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'ราคาหรือตำแหน่ง',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'รายละเอียด',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'จำนวนแจ้งเตือนที่เหลือ',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>
          Invite
          {record.name}
        </a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

interface ITickerTableProps {
  symbol: string;
}

const TickerTable: React.FC<ITickerTableProps> = ({ symbol }): JSX.Element => {
  console.log(symbol);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TickerTable;
