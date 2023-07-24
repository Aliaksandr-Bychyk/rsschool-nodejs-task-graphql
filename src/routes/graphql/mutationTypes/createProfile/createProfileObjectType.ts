import { GraphQLInputObjectType } from "graphql";
import { nonNullGraphQLBoolean, nonNullGraphQLInt, nonNullMemberEnumType, nonNullUUIDType } from "../../types/nonNullTypes.js";

const createProfileObjectType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: () => ({
    isMale: {
      type: nonNullGraphQLBoolean,
    },
    yearOfBirth: {
      type: nonNullGraphQLInt,
    },
    userId: {
      type: nonNullUUIDType,
    },
    memberTypeId: {
      type: nonNullMemberEnumType,
    },
  }),
});

export default createProfileObjectType;
