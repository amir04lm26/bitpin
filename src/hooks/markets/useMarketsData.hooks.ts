import { usePagination } from "hooks/pagination";
import { useState } from "react";
import { useEffectOnce } from "react-use";
import { IMarketsData } from "types";
import { fetchMarkets } from "utils/api";
import { MARKETS_ITEMS_COUNT } from "./markets.constants";

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
