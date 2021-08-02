import type { AppProps } from "next/app";

import "antd/dist/antd.dark.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
