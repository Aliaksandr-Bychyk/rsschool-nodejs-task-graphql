import { GraphQLInputObjectType } from "graphql";
import { nonNullFloat, nonNullUUIDType } from "../../types/nonNullTypes.js";

const changeUserObjectType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: () => ({
    name: {
      type: nonNullUUIDType,
    },
    balance: {
      type: nonNullFloat,
    },
  }),
});

export default changeUserObjectType;
