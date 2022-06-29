import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React from "react";
import "../../styles/global.scss";

export const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
