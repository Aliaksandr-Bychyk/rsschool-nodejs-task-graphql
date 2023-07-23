import { Post } from "@prisma/client";
import IContext from "../types/IContext.js";
import { GraphQLObjectType } from "graphql";
import postObjectType from "./postObjectType.js";
import { UUIDType } from "../types/uuid.js";
import postObjectTypeList from "./postObjectTypeList.js";

const postQuery = {
  post: {
    type: postObjectType as GraphQLObjectType,
    args: {
      id: {
        type: UUIDType,
      },
    },
    resolve: async (_source, args: Post, context: IContext) => {
      return await context.prisma.memberType.findUnique({ 
        where: {
          id: args.id,
        },
      });
    },
  },
  posts: {
    type: postObjectTypeList,
    resolve: async (_source, _args, context: IContext) => {
      return await context.prisma.memberType.findMany();
    },
  },
};

export default postQuery;
