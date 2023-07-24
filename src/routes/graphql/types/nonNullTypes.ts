import { GraphQLNonNull } from "graphql";
import { UUIDType } from "./uuid.js";
import { memberEnumType } from "../queryTypes/memberQuery/memberObjectType.js";

const nonNullUUIDType = new GraphQLNonNull(UUIDType);
const nonNullMemberEnumType = new GraphQLNonNull(memberEnumType);

export { nonNullUUIDType, nonNullMemberEnumType };