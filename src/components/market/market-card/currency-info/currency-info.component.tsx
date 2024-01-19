import { Box, CardMedia, Typography } from "@mui/material";
import { ICurrencyInfoProps } from "./currency-info.models";

export function CurrencyInfo({ currency }: ICurrencyInfoProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}>
      <CardMedia
        sx={{ height: 20, width: 20 }}
        image={currency.image}
        title={currency.title}
      />

      <Typography variant='body1' color='text.secondary' sx={{ ml: 1 }}>
        {currency.title_fa}
      </Typography>
    </Box>
  );
}
