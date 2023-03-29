import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { Global } from "~/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
