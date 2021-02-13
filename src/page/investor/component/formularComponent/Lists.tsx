import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

const data = [
  {
    title: 'คำนวนหากำไร PROFIT',
    icon: <FontAwesomeIcon icon={faBalanceScaleRight} size={'2x'} />,
  }
];

const Lists = () => {
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
              title={<a>{item.title}</a>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Lists;
