import { GraphQLObjectType } from "graphql";
import memberQuery from "./memberQuery/memberQuery.js";

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...memberQuery
  }),
});

export default queryType;
