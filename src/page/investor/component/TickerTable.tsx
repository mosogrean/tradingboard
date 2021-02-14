/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React, { useEffect, useState } from 'react';
import {
  Table, Tag, Space, Button,
} from 'antd';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { Redirect } from 'react-router';
import R from '../../../routers/guest/Router';

interface ITickerTableProps {
  symbol: string;
  setResetTable: (is: boolean) => any;
  resetTable: boolean;
}

const LIST_TICKERS = gql`
  query tickers_crypto_symbol($symbol: String!) {
    tickers_crypto_symbol(symbol:$symbol) {
      _id
      symbol
      price
      alert_msg
    }
  }
`;

const DELETE_TICKER = gql`
  mutation delete_ticker_crypto($_id: String!){
    delete_ticker_crypto(_id: $_id)
  }
`;

const TickerTable: React.FC<ITickerTableProps> = ({ symbol, setResetTable, resetTable }): JSX.Element => {
  // console.log(symbol);
  console.log(resetTable);
  const [data, setData] = useState([]);
  const [listTickersFC, listTickers] = useLazyQuery(LIST_TICKERS);
  const [deleteTicker] = useMutation(DELETE_TICKER);
  const [goTo, setGoTo] = useState<JSX.Element>();
  const [resetTableMatch, setResetTableMatch] = useState(resetTable);

  useEffect(() => {
    if (window.localStorage.getItem('authorization') === null) {
      setGoTo(<Redirect to={R.login.link} />);
    }
  }, []);

  useEffect(() => {
    console.log(resetTable);
    if (resetTable) {
      console.log(resetTable);
      listTickersFC({
        variables: {
          symbol: symbol.toLowerCase(),
        },
        context: {
          headers: {
            Authorization: window.localStorage.getItem('authorization'),
          },
        },
      });
      setResetTable(false);
    }
  }, [resetTable]);

  console.log(listTickers.data);

  useEffect(() => {
    if (listTickers.data !== undefined) {
      setData(listTickers.data?.tickers_crypto_symbol || []);
    }
  }, [listTickers]);

  const columns = [
    {
      title: 'ราคาแจ้งเตือน',
      dataIndex: 'price',
      key: 'price',
      render: (text: any): string => `${text} บาท`,
    },
    {
      title: 'รายละเอียด',
      key: 'alert_msg',
      dataIndex: 'alert_msg',
      render: (text: any): string => `${text} ครั้ง`,
    },
    {
      title: 'Action',
      key: '_id',
      render: (text: any, _record: any): JSX.Element => (
        <Space size="middle">
          <Button
            danger
            onClick={(): void => {
              deleteTicker({
                variables: {
                  _id: text._id,
                },
                context: {
                  headers: {
                    Authorization: window.localStorage.getItem('authorization'),
                  },
                },
              });
              setTimeout(() => {
                setResetTable(true);
              }, 1000);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      {goTo || null}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TickerTable;
