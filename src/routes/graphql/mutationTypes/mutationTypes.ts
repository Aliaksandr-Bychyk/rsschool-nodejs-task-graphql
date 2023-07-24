import { GraphQLObjectType } from "graphql";

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({

  })
});

export default mutationTypes;
