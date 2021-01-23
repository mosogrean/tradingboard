import axios from 'axios';
import moment from 'moment';

export type SymbolType = 'BTC_THB';
export type ResolutionType = '1' | '5' | '15' | '30' | '60' | '240' | '1D';

export const TradingAPI = (symbol: SymbolType, resolution: ResolutionType, from: number, to: number): any => axios.get(`https://tradingview.bitkub.com/tradingview/history?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}`).then((res: any): any => res.data);

export const TradingTimeSelectAPI = (symbol: SymbolType, unixTime: number): any => {
  const resolution: ResolutionType = '15';
  return axios.get(`https://tradingview.bitkub.com/tradingview/history?symbol=${symbol}&resolution=${resolution}&from=${unixTime}&to=${unixTime}`).then((res: any): any => res.data);
};

export const TradingNowAPI = (symbol: SymbolType): any => {
  const resolution: ResolutionType = '15';
  const unixTime = moment().unix();
  return axios.get(`https://tradingview.bitkub.com/tradingview/history?symbol=${symbol}&resolution=${resolution}&from=${unixTime}&to=${unixTime}`).then((res: any): any => res.data);
};

export default null;
