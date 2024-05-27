import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import type { AppProps } from "next/app";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeObject } from "@/shared/util";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState(createTheme(themeObject(false)));
  const router = useRouter();

  const isAuthPage = router.pathname.startsWith("/auth");

  return (
    <ThemeProvider theme={theme}>
      {!isAuthPage && <Navbar />}
      <main
        className={`flex flex-col h-[100vh] w-full items-center ${roboto.className}`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
