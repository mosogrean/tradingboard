import React, { useState, useEffect } from 'react';
import InnerHTML from 'dangerously-set-html-content';
import {
  Row, Col, Typography, Button,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faExternalLinkSquareAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { CryptoSymbolData } from './Index';
import R from '../../routers/investor/Router';

const { Title } = Typography;

interface INewCrypto {
  oldSymbol: string;
  symbol: string;
  script: string;
}

const CryptoTradingViewer: React.FC = (): JSX.Element => {
  const [tradingViews, setTradingViews] = useState<INewCrypto[]>();
  const [isTradingViewsMount, setIsTradingViewsMount] = useState(false);
  const [viewBitcoin, setViewBitcoin] = useState<string>();
  const [viewBitcoin2, setViewBitcoin2] = useState<string>();
  useEffect(() => {
    const newCrypto = CryptoSymbolData.map(({ crypto }): INewCrypto => ({ oldSymbol: crypto, symbol: crypto.split('_').join(''), script: '' }));
    setTradingViews(newCrypto);
    setIsTradingViewsMount(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const addScript = tradingViews?.map((crypto, index): INewCrypto => ({
        ...crypto,
        script: `
        new TradingView.widget(
          {
          "width": "100%",
          "height": 610,
          "symbol": "BITKUB:${crypto.symbol}",
          "interval": "60", //240
          "timezone": "Asia/Bangkok",
          "theme": "light",
          "style": "1",
          "locale": "th_TH",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "withdateranges": true,
          "allow_symbol_change": true,
          "details": true,
          "studies": [
            "MACD@tv-basicstudies",
            "RSI@tv-basicstudies"
          ],
          "container_id": "tradingview_5a28d${index}"
        }
          );
        `,
      }));
      setTradingViews(addScript);
    }, 1000);
  }, [isTradingViewsMount]);

  console.log(tradingViews);

  return (
    <div>
      <Row gutter={[16, 24]}>
        {
          tradingViews?.map((crypto, index) => (
            <>
              <Col span={12}>
                <Title level={2}>
                  {crypto.symbol}
                  <Button type="link" href={R.cryptoSymbol.link.replace(':Symbol', crypto.oldSymbol)} icon={<FontAwesomeIcon icon={faExternalLinkSquareAlt} />}><span style={{ paddingLeft: 12 }}>MANAGE</span></Button>
                  <Button type="link" href={`https://www.bitkub.com/market/${crypto.oldSymbol.split('_')[0]}`} target="_blank" icon={<FontAwesomeIcon icon={faExternalLinkAlt} />}><span style={{ paddingLeft: 12 }}>BITKUB</span></Button>
                </Title>
                <InnerHTML html={`
                    <div class="tradingview-widget-container">
                    <div id="tradingview_5a28d${index}"></div>
                    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/${crypto.symbol}/?exchange=BITKUB" rel="noopener" target="_blank"><span class="blue-text">${crypto.symbol} Chart</span></a> by TradingView</div>
                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                    <script type="text/javascript">
                        ${crypto.script}
                    </script>
                  </div>
                `}
                />
              </Col>
            </>
          ))
        }
      </Row>
    </div>
  );
};

export default CryptoTradingViewer;
