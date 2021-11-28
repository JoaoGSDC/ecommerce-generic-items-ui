import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(String(process.env.API_URL), {
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export default client;
