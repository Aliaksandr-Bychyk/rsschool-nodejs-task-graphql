import { GraphQLObjectType } from "graphql";
import createPost from "./createPost/createPost.js";
import createUser from "./createUser/createUser.js";
import createProfile from "./createProfile/createProfile.js";

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...createPost,
    ...createUser,
    ...createProfile,
  }),
});

export default mutationTypes;
