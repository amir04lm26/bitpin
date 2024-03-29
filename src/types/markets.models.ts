import { ICurrency } from "./currency.models";

export interface IMarketsData {
  count: number;
  next: number | null;
  previous: number | null;
  results: IMarket[];
}

export interface IMarket {
  id: number;
  currency1: ICurrency;
  currency2: ICurrency;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: IPriceInfo;
  internal_price_info: IPriceInfo;
  price_info: IPriceInfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
}

export interface IPriceInfo {
  created_at: number | null;
  price: string;
  change: number;
  min: string;
  max: string;
  time: null;
  mean: null;
  value: null;
  amount: null;
}

export type IMarketSocketUpdatesType =
  | { message: string }
  | {
      event: string;
      [id: number]: IPriceInfo;
    }
  | undefined;
