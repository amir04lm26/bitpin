import { fetcher } from "services";
import { FETCH_MARKETS_END_PINT } from "../endpoints";
import { IMarketsData } from "types";

export function fetchMarkets() {
  return fetcher<IMarketsData>(FETCH_MARKETS_END_PINT);
}
