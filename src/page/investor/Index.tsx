import {
  Tag, Space, Row, Card, Table, Button,
} from 'antd';
import React, { useState } from 'react';
import R from '../../routers/investor/Router';
import './less/index.less';

const columns = [
  {
    title: 'สกุลเงิน',
    dataIndex: 'title',
    key: 'title',
  },
];

export const CryptoSymbolData = [
  {
    key: '1',
    title: 'BITCOIN',
    crypto: 'BTC_THB',
  }, {
    key: '2',
    title: 'ETHREUM',
    crypto: 'ETH_THB',
  },
  {
    key: '3',
    title: 'XRP',
    crypto: 'XRP_THB',
  },
  {
    key: '4',
    title: 'OMG',
    crypto: 'OMG_THB',
  },
];

const Index: React.FC = (): JSX.Element => {
  const [resetTable, setResetTable] = useState(false);
  return (
    <>
      <Row justify="space-around">
        <Card
          title="CRYPTOCURRENCY"
          style={{ width: '50%' }}
          extra={(<><Button type="link" href={R.tradingViewer.link}>view tradingviwer</Button></>)}
        >
          <Table
            className="table-check"
            columns={columns}
            dataSource={CryptoSymbolData}
            onRow={(record, rowIndex) => ({
              onClick: (): void => {
                window.location.href = R.cryptoSymbol.link.replace(':Symbol', record.crypto);
              }, // click row
            })}
          />
        </Card>
      </Row>
    </>
  );
};

export default Index;
