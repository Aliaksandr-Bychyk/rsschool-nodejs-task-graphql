import { GraphQLSchema } from "graphql";
import queryTypes from "./queryTypes.js";

const graphQLSchema = new GraphQLSchema({
  query: queryTypes,
});

export default graphQLSchema;