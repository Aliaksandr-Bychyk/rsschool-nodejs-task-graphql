import { GraphQLInputObjectType } from "graphql";
import { nonNullGraphQLFloat, nonNullUUIDType } from "../../types/nonNullTypes.js";

const createUserObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    name: {
      type: nonNullUUIDType,
    },
    balance: {
      type: nonNullGraphQLFloat,
    },
  }),
});

export default createUserObjectType;
