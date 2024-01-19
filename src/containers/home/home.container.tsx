import { Container, Pagination, Typography } from "@mui/material";
import { MarketsContainer } from "components/market";
import { useMarketsData } from "hooks/markets";
import { ChangeEvent, useCallback } from "react";

export function HomeContainer() {
  const { paginatedMarkets, itemsCount, page, totalPages, loading, setPage } =
    useMarketsData();

  const handlePageChange = useCallback(
    (_event: ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [setPage]
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        gutterBottom
        variant='h4'
        component='h1'
        sx={{ textAlign: "center" }}>
        لیست مارکت ها
      </Typography>

      {loading ? (
        <Typography
          gutterBottom
          variant='h6'
          component='p'
          sx={{ textAlign: "center" }}>
          در حال دریافت دیتا ...
        </Typography>
      ) : paginatedMarkets ? (
        <>
          <MarketsContainer markets={paginatedMarkets} count={itemsCount} />
          <Pagination
            page={page}
            count={totalPages}
            variant='outlined'
            sx={{ mt: 5, mb: 4, ul: { justifyContent: "center" } }}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <Typography
          gutterBottom
          variant='h6'
          component='p'
          sx={{ textAlign: "center" }}>
          خطایی رخ داده است
        </Typography>
      )}
    </Container>
  );
}
