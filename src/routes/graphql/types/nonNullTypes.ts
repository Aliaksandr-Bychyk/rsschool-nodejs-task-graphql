import { GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLNonNull } from "graphql";
import { UUIDType } from "./uuid.js";
import { memberEnumType } from "../queryTypes/memberQuery/memberObjectType.js";
import createPostObjectType from "../mutationTypes/createPost/createPostObjectType.js";
import createUserObjectType from "../mutationTypes/createUser/createUserObjectType.js";
import createProfileObjectType from "../mutationTypes/createProfile/createProfileObjectType.js";
import changePostObjectType from "../mutationTypes/changePost/changePostObjectType.js";
import changeProfileObjectType from "../mutationTypes/changeProfile/changeProfileObjectType.js";

const nonNullUUIDType = new GraphQLNonNull(UUIDType);
const nonNullMemberEnumType = new GraphQLNonNull(memberEnumType);

const nonNullFloat = new GraphQLNonNull(GraphQLFloat)
const nonNullGraphQLBoolean = new GraphQLNonNull(GraphQLBoolean);
const nonNullGraphQLInt = new GraphQLNonNull(GraphQLInt);

const nonNullCreatePostObjectType = new GraphQLNonNull(createPostObjectType);
const nonNullCreateUserObjectType = new GraphQLNonNull(createUserObjectType);
const nonNullCreateProfileObjectType = new GraphQLNonNull(createProfileObjectType);

const nonNullChangePostObjectType = new GraphQLNonNull(changePostObjectType);
const nonNullChangeProfileObjectType = new GraphQLNonNull(changeProfileObjectType);

export { 
  nonNullUUIDType,
  nonNullMemberEnumType,
  nonNullFloat,
  nonNullGraphQLBoolean,
  nonNullGraphQLInt,
  nonNullCreatePostObjectType,
  nonNullCreateUserObjectType,
  nonNullCreateProfileObjectType,
  nonNullChangePostObjectType,
  nonNullChangeProfileObjectType,
};