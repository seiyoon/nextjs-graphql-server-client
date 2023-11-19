import { ApolloProvider } from "@apollo/client";

import client from "../graphql/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
