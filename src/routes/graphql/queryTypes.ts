import { GraphQLObjectType } from "graphql";
import memberQuery from "./memberQuery/memberQuery.js";
import postQuery from "./postQuery/postQuery.js";

const queryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...memberQuery,
    ...postQuery,
  }),
});

export default queryTypes;
