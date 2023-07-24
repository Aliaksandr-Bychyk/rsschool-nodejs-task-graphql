import { GraphQLObjectType } from "graphql";
import createPost from "./createPost/createPost.js";
import createUser from "./createUser/createUser.js";
import createProfile from "./createProfile/createProfile.js";
import deletePost from "./deletePost/deletePost.js";
import deleteProfile from "./deleteProfile/deleteProfile.js";
import deleteUser from "./deleteUser/deleteUser.js";

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...createPost,
    ...deletePost,
    ...createUser,
    ...deleteUser,
    ...createProfile,
    ...deleteProfile,
  }),
});

export default mutationTypes;
