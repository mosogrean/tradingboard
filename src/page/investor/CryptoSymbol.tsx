import {
  Breadcrumb,
  Card,
  Col,
  Row,
  Space,
  Typography,
} from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import InnerHTML from 'dangerously-set-html-content';
import LineBTC from './component/LineBTC';
import TickerForm from './component/TickerForm';
import TickerTable from './component/TickerTable';

const CryptoSymbol: React.FC = (props): JSX.Element => {
  const { Symbol } = useParams();
  const [resetTable, setResetTable] = useState(false);
  const [viewBitcoin, setViewBitcoin] = useState('');

  setTimeout(() => {
    setViewBitcoin(`new TradingView.widget(
      {
      "width": "100%",
      "height": "660",
      "symbol": "BITKUB:${Symbol.split('_').join('')}",
      "interval": "60", //240
      "timezone": "Asia/Bangkok",
      "theme": "light",
      "style": "1",
      "locale": "th_TH",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "details": true,
      "studies": [
        "MACD@tv-basicstudies",
        "RSI@tv-basicstudies"
      ],
      "container_id": "tradingview_5a28d"
    }
      );`);
  }, 1000);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Investor</Breadcrumb.Item>
        <Breadcrumb.Item>{Symbol}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="investor-content">
        <Row>
          <Col span={9}>
            <Card title="ราคาที่ต้องการจะ Ticker ไปยัง  Line">
              <TickerForm symbol={Symbol} />
            </Card>
          </Col>
          <Col span={14} offset={1}>
            <Card title="กราฟ ณ​ เวลาปัจจุบัน">
              <LineBTC symbol={Symbol} />
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col span={24}>
            <InnerHTML html={`
                  <div class="tradingview-widget-container">
                  <div id="tradingview_5a28d"></div>
                  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ETHTHB/?exchange=BITKUB" rel="noopener" target="_blank"></a> by TradingView</div>
                  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                  <script type="text/javascript">
                      ${viewBitcoin}
                  </script>
                </div>
              `}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col span={24}>
            <Card title="รายการ Ticker">
              <TickerTable />
            </Card>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </>
  );
};

export default CryptoSymbol;