import { GraphQLSchema } from "graphql";
import queryType from "./queryType.js";

const graphQLSchema = new GraphQLSchema({
  query: queryType,
});

export default graphQLSchema;