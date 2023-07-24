import { GraphQLInputObjectType } from "graphql";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";

const createPostObjectType = new GraphQLInputObjectType({
  name: 'CreatePost',
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

export default createPostObjectType;
