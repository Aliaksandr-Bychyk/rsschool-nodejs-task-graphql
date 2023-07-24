import { GraphQLInputObjectType } from "graphql";
import { nonNullFloat, nonNullUUIDType } from "../../types/nonNullTypes.js";

const createUserObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    name: {
      type: nonNullUUIDType,
    },
    balance: {
      type: nonNullFloat,
    },
  }),
});

export default createUserObjectType;
