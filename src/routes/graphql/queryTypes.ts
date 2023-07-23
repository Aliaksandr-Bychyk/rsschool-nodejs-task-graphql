import { GraphQLObjectType } from "graphql";
import memberQuery from "./memberQuery/memberQuery.js";

const queryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...memberQuery
  }),
});

export default queryTypes;
