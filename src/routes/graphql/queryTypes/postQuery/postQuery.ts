import { Post } from "@prisma/client";
import IContext from "../../types/IContext.js";
import { GraphQLObjectType } from "graphql";
import postObjectType from "./postObjectType.js";
import postObjectTypeList from "./postObjectTypeList.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";

const postQuery = {
  post: {
    type: postObjectType as GraphQLObjectType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: Post, context: IContext) => {
      return await context.prisma.post.findUnique({ 
        where: {
          id: args.id,
        },
      });
    },
  },
  posts: {
    type: postObjectTypeList,
    resolve: async (_source, _args, context: IContext) => {
      return await context.prisma.post.findMany();
    },
  },
};

export default postQuery;
