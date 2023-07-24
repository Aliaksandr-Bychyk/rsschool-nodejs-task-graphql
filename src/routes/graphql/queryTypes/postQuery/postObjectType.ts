import { GraphQLObjectType } from "graphql";
import { UUIDType } from "../../types/uuid.js";
import IContext from "../../types/IContext.js";
import { Post } from "@prisma/client";
import userObjectType from "../userQuery/userObjectType.js";

const postObjectType = new GraphQLObjectType({
  name: 'Post',
  description: 'A Post',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'The id',
    },
    title: {
      type: UUIDType,
      description: 'The title',
    },
    content: {
      type: UUIDType,
      description: 'The content',
    },
    author: {
      type: userObjectType as GraphQLObjectType,
      description: 'The author',
      resolve: async (source: Post, _args, context: IContext) => {
        return await context.prisma.user.findUnique({
          where: {
            id: source.authorId,
          },
        });
      },
    },
    authorId: {
      type: UUIDType,
      description: 'The authorId',
    },
  })
});

export default postObjectType;