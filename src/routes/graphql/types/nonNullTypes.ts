import { GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLNonNull } from "graphql";
import { UUIDType } from "./uuid.js";
import { memberEnumType } from "../queryTypes/memberQuery/memberObjectType.js";
import createPostObjectType from "../mutationTypes/createPost/createPostObjectType.js";

const nonNullUUIDType = new GraphQLNonNull(UUIDType);
const nonNullMemberEnumType = new GraphQLNonNull(memberEnumType);
const nonNullCreatePostObjectType = new GraphQLNonNull(createPostObjectType);
const nonNullFloat = new GraphQLNonNull(GraphQLFloat)
const nonNullGraphQLBoolean = new GraphQLNonNull(GraphQLBoolean);
const nonNullGraphQLInt = new GraphQLNonNull(GraphQLInt);

export { 
  nonNullUUIDType,
  nonNullMemberEnumType,
  nonNullCreatePostObjectType,
  nonNullFloat,
  nonNullGraphQLBoolean,
  nonNullGraphQLInt,
};