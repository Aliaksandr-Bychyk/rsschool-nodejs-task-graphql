import { GraphQLObjectType } from "graphql";
import memberQuery from "./memberQuery/memberQuery.js";
import postQuery from "./postQuery/postQuery.js";
import profileQuery from "./profileQuery/profileQuery.js";

const queryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...memberQuery,
    ...postQuery,
    ...profileQuery,
  }),
});

export default queryTypes;
