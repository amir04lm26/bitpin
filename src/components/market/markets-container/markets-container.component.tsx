import { Stack, Typography } from "@mui/material";
import { IMarketsContainerProps } from "./markets-container.models";
import { MarketCard } from "../market-card";

export function MarketsContainer({ markets, count }: IMarketsContainerProps) {
  return (
    <>
      <Typography
        gutterBottom
        variant='h6'
        component='p'
        sx={{ textAlign: "center", mb: 3 }}>
        {count} مارکت یافت شد.
      </Typography>

      <Stack
        direction='row'
        gap={2}
        flexWrap='wrap'
        justifyContent='center'
        useFlexGap>
        {markets.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </Stack>
    </>
  );
}
