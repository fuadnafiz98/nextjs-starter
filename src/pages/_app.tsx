import { AppProps } from "next/app";
import "@/styles/global.css";

import { Provider, createClient } from "urql";

const client = createClient({
  url: "http://localhost:3000/api/graphql",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider value={client}>
    <Component {...pageProps} />
    // </Provider>
  );
}
