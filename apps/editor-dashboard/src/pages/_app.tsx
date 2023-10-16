import "@/styles/globals.css";
import "@/styles/fonts.css";
import theme from "@/themes/fonttheme";
import { ThemeProvider } from "@emotion/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#F3F4F8", height: "100vh" }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
