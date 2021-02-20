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
  const [resetTable, setResetTable] = useState(true);
  const [viewBitcoin, setViewBitcoin] = useState('');

  console.log(resetTable)

  setTimeout(() => {
    setViewBitcoin(`new TradingView.widget(
      {
      "width": "100%",
      "height": "660",
      "symbol": "BITKUB:${Symbol.toUpperCase()}THB",
      "interval": "15", //240
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
        "RSI@tv-basicstudies",
        "BB@tv-basicstudies",
        "BollingerBandsWidth@tv-basicstudies"
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
        <Row gutter={[16, 24]}>
          <Col sm={0} xs={0} md={24} lg={12}>
            <Card title="กราฟ ณ​ เวลาปัจจุบัน">
              <LineBTC symbol={`${Symbol}_THB`} />
            </Card>
          </Col>
          <Col sm={24} xs={24} md={24} lg={12}>
            <Card title="ราคาที่ต้องการจะ Ticker ไปยัง  Line">
              <TickerForm symbol={Symbol} setResetTable={setResetTable} />
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={24} xs={24} md={24} lg={24}>
            <Card title="รายการ Ticker">
              <TickerTable symbol={Symbol} resetTable={resetTable} setResetTable={setResetTable} />
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
