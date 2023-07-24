import { GraphQLObjectType } from 'graphql';
import userObjectType from "../../queryTypes/userQuery/userObjectType.js";
import IContext from "../../types/IContext.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";

interface ISubscribeTo {
  userId: string;
  authorId: string;
};

const subscribeTo = {
  subscribeTo: {
    type: userObjectType as GraphQLObjectType,
    args: {
      userId: {
        type: nonNullUUIDType,
      },
      authorId: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: ISubscribeTo, context: IContext) => {
      return await context.prisma.user.update({
        where: {
          id: args.userId,
        },
        data: {
          userSubscribedTo: {
            create: {
              authorId: args.authorId,
            },
          },
        },
      });
    },
  },
};

export default subscribeTo;
