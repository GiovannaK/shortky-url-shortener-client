import { AppProps } from "next/dist/shared/lib/router/router";
import { ApiProvider } from "../context/ApiContext";
import { GlobalStyle } from "../Global/styles";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ApiProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ApiProvider>
    </>
  )
}