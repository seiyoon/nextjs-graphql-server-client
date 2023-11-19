import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql", // 클라이언트가 연결할 graphql api 주소
  cache: new InMemoryCache(),
});

export default client;
