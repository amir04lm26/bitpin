import { Grid, Typography } from "@mui/material";
import { IMarketsContainerProps } from "./markets-container.models";
import { MarketCard } from "../market-card";

export function MarketsContainer({ markets }: IMarketsContainerProps) {
  return (
    <div>
      <Typography
        gutterBottom
        variant='h6'
        component='p'
        sx={{ textAlign: "center", mb: 3 }}>
        {markets.count} مارکت یافت شد.
      </Typography>

      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent='center'>
        {markets.results.map((market) => (
          <Grid xs={3} key={market.id}>
            <MarketCard market={market} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
