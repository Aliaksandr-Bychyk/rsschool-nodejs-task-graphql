import { GraphQLObjectType } from "graphql";
import createPost from "./createPost/createPost.js";

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...createPost,
  }),
});

export default mutationTypes;
