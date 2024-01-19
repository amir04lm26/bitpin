import { useState } from "react";
import { useEffectOnce } from "react-use";
import { IMarketsData } from "types";
import { fetchMarkets } from "utils/api";

export function useMarketsData() {
  const [loading, setLoading] = useState(false);
  const [markets, setMarkets] = useState<IMarketsData>();
  const [error, setError] = useState<unknown>();

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

  return { markets, loading, error };
}
