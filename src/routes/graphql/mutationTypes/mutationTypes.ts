import { GraphQLObjectType } from "graphql";
import createPost from "./createPost/createPost.js";
import createUser from "./createUser/createUser.js";

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...createPost,
    ...createUser,
  }),
});

export default mutationTypes;
