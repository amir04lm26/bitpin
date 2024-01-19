import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IMarketCardProps } from "./market-card.models";
import { CurrencyInfo } from "./currency-info";

export function MarketCard({ market }: IMarketCardProps) {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ textAlign: "center" }}>
          {market.title_fa}
        </Typography>

        <CurrencyInfo currency={market.currency1} />

        <CurrencyInfo currency={market.currency2} />

        <Typography variant='body1' color='text.secondary' sx={{ mt: 2 }}>
          {(+market.price).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
