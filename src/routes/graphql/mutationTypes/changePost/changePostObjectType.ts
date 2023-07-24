import { GraphQLInputObjectType } from "graphql";
import { UUIDType } from "../../types/uuid.js";

const changePostObjectType = new GraphQLInputObjectType({
  name: 'ChangePostInput',
  fields: () => ({
    title: {
      type: UUIDType,
    },
    content: {
      type: UUIDType,
    },
  }),
});

export default changePostObjectType;
