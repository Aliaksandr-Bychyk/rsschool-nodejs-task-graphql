import { User } from "@prisma/client";
import IContext from "../../types/IContext.js";
import { GraphQLObjectType } from "graphql";
import userObjectType from "./userObjectType.js";
import userObjectTypeList from "./userObjectTypeList.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";

const userQuery = {
  user: {
    type: userObjectType as GraphQLObjectType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: User, context: IContext) => {
      return await context.prisma.user.findUnique({ 
        where: {
          id: args.id,
        },
      });
    },
  },
  users: {
    type: userObjectTypeList,
    resolve: async (_source, _args, context: IContext) => {
      return await context.prisma.user.findMany();
    },
  },
};

export default userQuery;
