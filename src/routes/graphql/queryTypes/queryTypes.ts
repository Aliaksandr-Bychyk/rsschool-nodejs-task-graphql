import { GraphQLObjectType } from "graphql";
import memberQuery from "./memberQuery/memberQuery.js";
import postQuery from "./postQuery/postQuery.js";
import profileQuery from "./profileQuery/profileQuery.js";
import userQuery from "./userQuery/userQuery.js";

const queryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...memberQuery,
    ...postQuery,
    ...profileQuery,
    ...userQuery,
  }),
});

export default queryTypes;
