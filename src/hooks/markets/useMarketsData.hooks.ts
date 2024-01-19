import { usePagination } from "hooks/pagination";
import { useState } from "react";
import { useEffectOnce, useUpdateEffect } from "react-use";
import { IMarketSocketUpdatesType, IMarketsData } from "types";
import { fetchMarkets } from "utils/api";
import { MARKETS_ITEMS_COUNT } from "./markets.constants";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { SOCKET_ADDRESS } from "configs";
import {
  CURRENCY_PRICE_INFO_UPDATE,
  SUBSCRIBE_TO_PRICE_INFO,
} from "utils/constants";

export function useMarketsData() {
  const [loading, setLoading] = useState(false);
  const [markets, setMarkets] = useState<IMarketsData>();
  const [error, setError] = useState<unknown>();

  const {
    data: paginatedMarkets,
    page,
    totalPages,
    setPage,
  } = usePagination(markets?.results, MARKETS_ITEMS_COUNT);

  useEffectOnce(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchMarkets();
        setMarkets(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  });

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket<IMarketSocketUpdatesType>(SOCKET_ADDRESS, {
      share: false,
      shouldReconnect: () => true,
    });

  useUpdateEffect(() => {
    if (readyState === ReadyState.OPEN && markets) {
      sendJsonMessage({
        method: SUBSCRIBE_TO_PRICE_INFO,
      });
    }
  }, [readyState, markets]);

  useUpdateEffect(() => {
    if (
      lastJsonMessage &&
      "event" in lastJsonMessage &&
      lastJsonMessage.event === CURRENCY_PRICE_INFO_UPDATE
    ) {
      // NOTE: I don't receive ant market_id so I use the object key as the id
      if (markets) {
        const newMarkets = { ...markets };
        newMarkets.results.forEach((market) => {
          if (Object.hasOwnProperty.bind(lastJsonMessage, market.id)) {
            market.price = lastJsonMessage[market.id].price;
          }
        });
        setMarkets(newMarkets);
      }
    }
  }, [lastJsonMessage]);

  return {
    markets,
    loading,
    error,
    paginatedMarkets,
    itemsCount: markets?.count || 0,
    page,
    totalPages,
    setPage,
  };
}
