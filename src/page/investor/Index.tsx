import {
  Row,
  Card,
  Table,
  Button,
  Col,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import R from '../../routers/investor/Router';
import './less/index.less';
import Formular from './component/Formular';
import { useQuery, gql } from '@apollo/client';
import Profit from './component/formularComponent/Profit';
import Coins from './component/formularComponent/Coins';

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
  const [goToPath, setGoToPath] = useState<JSX.Element>();
  const [formular, setFormular] = useState<'profit' | 'coins'>('profit');
  const symbolCryptos = useQuery(GET_SYMBOL_CRYPTO);

  const CryptoSymbolList = symbolCryptos.data?.symbol_crypto?.map((val: any, index: number) => ({
    key: index,
    ...val,
  }));

  const formularCheck = (): JSX.Element => {
    switch (formular) {
      case 'profit':
        return (<Profit />);
      case 'coins':
        return (<Coins />);
      default:
        return (<></>);
    }
  };

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
            <Formular setFormular={setFormular} />
            {formularCheck()}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
