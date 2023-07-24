import { User } from "@prisma/client";
import IContext from "../../types/IContext.js";
import { GraphQLObjectType, GraphQLResolveInfo } from "graphql";
import userObjectType from "./userObjectType.js";
import userObjectTypeList from "./userObjectTypeList.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";
import { ResolveTree, parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } from "graphql-parse-resolve-info";

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
    resolve: async (_source, _args, context: IContext, resolveInfo: GraphQLResolveInfo) => {
      const parsedResolveInfoFragment = parseResolveInfo(resolveInfo);
      const { fields } = simplifyParsedResolveInfoFragmentWithType(
        parsedResolveInfoFragment as ResolveTree,
        userObjectTypeList,
      );
      const userSubscribedTo = 'userSubscribedTo' in fields;
      const subscribedToUser = 'subscribedToUser' in fields;

      const users = await context.prisma.user.findMany({
        include: {
          userSubscribedTo,
          subscribedToUser,
      },
      });
      
      users.forEach((user) => {
        context.loaders.userLoader.prime(user.id, user);
      });

      return users;
    },
  },
};

export default userQuery;
