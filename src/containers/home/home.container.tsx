import { Container, Typography } from "@mui/material";
import { MarketsContainer } from "components/market";
import { MarketsPagination } from "components/market/markets-pagination";
import { useMarketsData } from "hooks/markets";

export function HomeContainer() {
  const { paginatedMarkets, itemsCount, page, totalPages, loading, setPage } =
    useMarketsData();

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
          <MarketsPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
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
