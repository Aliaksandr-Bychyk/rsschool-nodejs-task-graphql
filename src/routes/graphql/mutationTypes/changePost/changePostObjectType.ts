import { GraphQLInputObjectType } from "graphql";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";

const changePostObjectType = new GraphQLInputObjectType({
  name: 'ChangePostInput',
  fields: () => ({
    title: {
      type: nonNullUUIDType,
    },
    content: {
      type: nonNullUUIDType,
    },
  }),
});

export default changePostObjectType;
