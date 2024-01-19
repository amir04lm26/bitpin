import { useMemo, useState } from "react";
import { DEFAULT_PAGE_SIZE } from "./pagination.constants";

export function usePagination<T extends unknown>(
  data: T[] | undefined,
  perPage: number = DEFAULT_PAGE_SIZE
) {
  const totalPages = useMemo(
    () => (data ? Math.floor(data.length / perPage) : 0),
    [data, perPage]
  );
  const [page, setPage] = useState(0);

  const slicedData = useMemo(
    () => data?.slice(page * perPage, page * perPage + perPage),
    [data, page, perPage]
  );

  return { data: slicedData, page, totalPages, setPage };
}
