import { GraphQLObjectType } from "graphql";

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {}
});

export default queryType;
