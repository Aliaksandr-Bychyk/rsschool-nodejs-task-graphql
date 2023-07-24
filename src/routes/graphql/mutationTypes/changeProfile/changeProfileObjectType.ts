import { GraphQLInputObjectType } from "graphql";
import { nonNullGraphQLBoolean, nonNullGraphQLInt, nonNullUUIDType } from "../../types/nonNullTypes.js";

const changeProfileObjectType = new GraphQLInputObjectType({
  name: 'ChangeProfileInput',
  fields: () => ({
    isMale: {
      type: nonNullGraphQLBoolean,
    },
    yearOfBirth: {
      type: nonNullGraphQLInt,
    },
    memberTypeId: {
      type: nonNullUUIDType,
    },
  }),
});

export default changeProfileObjectType;
