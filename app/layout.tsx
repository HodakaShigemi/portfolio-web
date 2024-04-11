import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Mate } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shigemi's Portfolio",
  description: "システムエンジニア重見穂高のポートフォリオサイトです。",
  icons: [],
  keywords: [
    "Shigemi",
    "システムエンジニア",
    "重見穂高",
    "埼玉県",
    "戸田市",
    "蕨市",
    "中小企業向け",
    "AWS",
    "移行",
    "機械学習",
    "IT",
    "インフラ",
    "IaC",
    "SE",
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      /> */}
      <body>
        <AppRouterCacheProvider>
          {/* <StyledEngineProvider injectFirst> */}
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {props.children}
          </ThemeProvider>
          {/* </StyledEngineProvider> */}
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId="G-0MM8MJBQG3" />
    </html>
  );
}
