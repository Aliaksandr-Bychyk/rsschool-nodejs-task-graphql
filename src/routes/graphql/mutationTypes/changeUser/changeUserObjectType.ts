import { GraphQLFloat, GraphQLInputObjectType } from "graphql";
import { UUIDType } from "../../types/uuid.js";

const changeUserObjectType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: () => ({
    name: {
      type: UUIDType,
    },
    balance: {
      type: GraphQLFloat,
    },
  }),
});

export default changeUserObjectType;
