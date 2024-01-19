import { Container, Typography } from "@mui/material";
import { MarketsContainer } from "components/market";
import { useMarketsData } from "hooks/markets";

export function HomeContainer() {
  const { markets, loading } = useMarketsData();

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
      ) : markets ? (
        <MarketsContainer markets={markets} />
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
