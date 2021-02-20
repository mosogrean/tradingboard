import { faBalanceScaleRight, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { Link } from 'react-router-dom';

interface ILists {
  setFormular: any;
}

const data = [
  {
    title: 'คำนวณหากำไร PROFIT',
    icon: <FontAwesomeIcon icon={faBalanceScaleRight} size="2x" />,
    to: 'profit',
  },
  {
    title: 'คำนวณหาราคาซื้อจากจำนวนเหรียญ',
    icon: <FontAwesomeIcon icon={faCoins} size="2x" />,
    to: 'coins',
  },
];

const Lists: React.FC<ILists> = ({ setFormular }) => {
  console.log(1);
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={item.icon}
              title={<Button type="link" onClick={() => { setFormular(item.to); }}>{item.title}</Button>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Lists;
