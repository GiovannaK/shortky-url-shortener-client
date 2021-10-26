import { AppProps } from "next/dist/shared/lib/router/router";
import { GlobalStyle } from "../Global/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}