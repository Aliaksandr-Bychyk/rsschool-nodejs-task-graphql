import { GraphQLInputObjectType } from "graphql";
import { nonNullGraphQLBoolean, nonNullGraphQLInt, nonNullUUIDType } from "../../types/nonNullTypes.js";

const createProfileObjectType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: () => ({
    isMale: {
      type: nonNullGraphQLBoolean,
    },
    content: {
      type: nonNullGraphQLInt,
    },
    userId: {
      type: nonNullUUIDType,
    },
    memberTypeId: {
      type: nonNullUUIDType,
    },
  })
});

export default createProfileObjectType;
