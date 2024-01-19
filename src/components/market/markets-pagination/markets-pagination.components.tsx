import { Pagination } from "@mui/material";
import { ChangeEvent, memo, useCallback } from "react";
import { IMarketsPaginationProps } from "./markets-pagination.models";

function _MarketsPagination({
  page,
  totalPages,
  setPage,
}: IMarketsPaginationProps) {
  const handlePageChange = useCallback(
    (_event: ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [setPage]
  );

  return (
    <Pagination
      page={page}
      count={totalPages}
      variant='outlined'
      sx={{ mt: 5, mb: 4, ul: { justifyContent: "center" } }}
      onChange={handlePageChange}
    />
  );
}

export const MarketsPagination = memo(_MarketsPagination);
