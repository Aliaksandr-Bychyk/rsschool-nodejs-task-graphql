import { GraphQLInputObjectType } from "graphql";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";

const createUserObjectType = new GraphQLInputObjectType({
  name: 'CreateUser',
  fields: () => ({
    title: {
      type: nonNullUUIDType,
    },
    content: {
      type: nonNullUUIDType,
    },
    authorId: {
      type: nonNullUUIDType,
    },
  })
});

export default createUserObjectType;
