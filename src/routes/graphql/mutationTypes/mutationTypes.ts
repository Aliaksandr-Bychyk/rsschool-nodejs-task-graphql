import { GraphQLObjectType } from "graphql";
import createPost from "./createPost/createPost.js";
import createUser from "./createUser/createUser.js";
import createProfile from "./createProfile/createProfile.js";
import deletePost from "./deletePost/deletePost.js";
import deleteProfile from "./deleteProfile/deleteProfile.js";
import deleteUser from "./deleteUser/deleteUser.js";
import changePost from "./changePost/changePost.js";
import changeProfile from "./changeProfile/changeProfile.js";

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...createPost,
    ...deletePost,
    ...changePost,

    ...createUser,
    ...deleteUser,
    
    ...createProfile,
    ...deleteProfile,
    ...changeProfile,
  }),
});

export default mutationTypes;
