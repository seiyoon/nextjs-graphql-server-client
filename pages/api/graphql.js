import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "../../graphql/schemas.js";
import resolvers from "../../graphql/resolvers.js";
import allowCors from "../../utils/cors.js";

const apolloServer = new ApolloServer({
  typeDefs, // 스키마 : 데이터 구조와 서버에 수행할 수 있는 쿼리 정의
  resolvers, // 확인자 : 데이터를 얻고 처리하는 방법 정의
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export default allowCors(handler); // allowCors 서버에서 CORS 지원을 활성화하는데 사용
