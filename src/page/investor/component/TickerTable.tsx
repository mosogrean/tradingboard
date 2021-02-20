/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React, { useEffect, useState } from 'react';
import {
  Table, Tag, Space, Button,
} from 'antd';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
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
  mutation delete_ticker_crypto($_id: String!) {
    delete_ticker_crypto(_id: $_id) {
      _id
      symbol
      price
      alert_msg
    }
  }
`;

const TickerTable: React.FC<ITickerTableProps> = ({ symbol, setResetTable, resetTable }): JSX.Element => {
  // console.log(symbol);
  const [data, setData] = useState([]);
  const listTickers = useQuery(LIST_TICKERS, {
    variables: {
      symbol: symbol.toLowerCase(),
    },
    context: {
      headers: {
        Authorization: window.localStorage.getItem('authorization'),
      },
    },
    onCompleted: () => {
      setData(listTickers.data?.tickers_crypto_symbol || []);
    },
  });
  const [deleteTickerFC, deleteTicker] = useMutation(DELETE_TICKER, {
    update(catach, fetchData) {
      setData(fetchData.data?.delete_ticker_crypto || []);
    },
  });
  const [goTo, setGoTo] = useState<JSX.Element>();

  useEffect(() => {
    if (window.localStorage.getItem('authorization') === null) {
      setGoTo(<Redirect to={R.login.link} />);
    }
  }, []);


  useEffect(() => {
    if (resetTable) {
      listTickers.refetch();
      setResetTable(false);
    }
  }, [resetTable]);

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
      render: (text: any): string => `${text}`,
    },
    {
      title: 'Action',
      key: '_id',
      render: (text: any, _record: any): JSX.Element => (
        <Space size="middle">
          <Button
            danger
            onClick={(): void => {
              deleteTickerFC({
                variables: {
                  _id: text._id,
                },
                context: {
                  headers: {
                    Authorization: window.localStorage.getItem('authorization'),
                  },
                },
              }).then(() => {
                setResetTable(true);
              });
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
      <Table columns={columns} dataSource={listTickers.data?.tickers_crypto_symbol} />
    </div>
  );
};

export default TickerTable;
