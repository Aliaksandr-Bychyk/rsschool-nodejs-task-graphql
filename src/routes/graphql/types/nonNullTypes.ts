import { GraphQLNonNull } from "graphql";
import { UUIDType } from "./uuid.js";
import { memberEnumType } from "../queryTypes/memberQuery/memberObjectType.js";
import createPostObjectType from "../mutationTypes/createPost/createPostObjectType.js";

const nonNullUUIDType = new GraphQLNonNull(UUIDType);
const nonNullMemberEnumType = new GraphQLNonNull(memberEnumType);
const nonNullCreatePostObjectType = new GraphQLNonNull(createPostObjectType);

export { nonNullUUIDType, nonNullMemberEnumType, nonNullCreatePostObjectType };