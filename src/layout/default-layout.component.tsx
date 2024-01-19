import { PropsWithChildren } from "react";
import { Header } from "../components/header";

import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Consuming the outer theme is only required with coexisting themes, like in this documentation.
// If your app/website doesn't deal with this, you can have just:
// const theme = createTheme({ direction: 'rtl' })
const theme = (outerTheme: Theme) =>
  createTheme({
    ...outerTheme,
    direction: "rtl",
  });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className='app'>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
